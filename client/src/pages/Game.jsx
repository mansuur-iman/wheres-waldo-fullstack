import { useAuth } from "../context/useAuth";
import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { getFirstImage, sendGuess, nextImage } from "../services/fieldService";
import styles from "./Game.module.css";

export default function Game() {
  const { token, user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [selection, setSelection] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [leaders, setLeaders] = useState([]);
  const [playerRank, setPlayerRank] = useState(null);
  const [fieldComplete, setFieldComplete] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [finalTime, setFinalTime] = useState(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const containerRef = useRef(null);

  const TIMER_KEY = `game_timer_${id}`;

  if (!user) {
    navigate("/login");
  }

  const formatTime = (seconds = 0) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");

    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${m}:${s}`;
  };
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    let startTime = localStorage.getItem(TIMER_KEY);

    if (!startTime) {
      startTime = Date.now();
      localStorage.setItem(TIMER_KEY, startTime);
    } else {
      startTime = parseInt(startTime, 10);
    }

    startTimeRef.current = startTime;

    const update = () => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    };

    update();

    timerRef.current = setInterval(update, 1000);
  }, [TIMER_KEY]);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const clearTimer = useCallback(() => {
    localStorage.removeItem(TIMER_KEY);
    stopTimer();
  }, [TIMER_KEY]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [startTimer]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setLoading(true);
      try {
        const data = await getFirstImage(token, id);

        if (!isMounted) return;

        if (data.completed) {
          setFieldComplete(true);
          setFinalTime(data.timeTaken);
          setLeaders(data.leaders || []);
          setPlayerRank(data.rank || null);
          setLoading(false);
          return;
        }

        setCurrentImage(data.image);
        setCharacters(data.characters || []);
        startTimer();
      } catch (e) {
        if (isMounted) {
          setError(e.message || "Error loading game");
        }
      }

      if (isMounted) setLoading(false);
    };

    load();

    return () => {
      isMounted = false;
      clearTimer();
    };
  }, [token, id, startTimer, clearTimer]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSelection(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(null), 2000);
    return () => clearTimeout(t);
  }, [message]);

  const getPos = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  };

  const handleImageClick = (e) => {
    setSelection(getPos(e));
  };

  const handleGuess = async (characterName) => {
    if (!selection || loading) return;
    setLoading(true);
    try {
      const data = await sendGuess(
        token,
        id,
        selection.x,
        selection.y,
        characterName,
      );
      if (data.correct) {
        setMessage(" Correct!");
        setCharacters((prev) =>
          prev.map((c) =>
            c.name === characterName ? { ...c, found: true } : c,
          ),
        );
        setSelection(null);
      } else {
        setMessage(" Try again!");
        setSelection(null);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    setLoading(true);
    setSelection(null);
    setMessage(null);

    try {
      const data = await nextImage(token, id);

      if (data.completed) {
        clearTimer();
        setFinalTime(data.timeTaken);
        setLeaders(data.leaders || []);
        setPlayerRank(data.rank || null);
        setFieldComplete(true);
        return;
      }

      setCurrentImage(data.image);
      setCharacters(data.characters || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const getDropdownStyle = (sel) => {
    const flipY = sel.y > 70;
    const flipX = sel.x > 75;
    return {
      top: flipY ? "auto" : "60px",
      bottom: flipY ? "60px" : "auto",
      left: flipX ? "auto" : "50%",
      right: flipX ? "0" : "auto",
      transform: flipX ? "none" : "translateX(-50%)",
    };
  };

  const availableChars = characters.filter((c) => !c.found);
  const allFound = characters.length > 0 && availableChars.length === 0;

  if (error) {
    return (
      <div className={styles.errorScreen}>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Back to Mission Select</button>
      </div>
    );
  }
  if (loading && !currentImage) {
    return (
      <div className={styles.fullLoader}>
        <div className={styles.spinner}></div>
        <p>Loading mission...</p>
      </div>
    );
  }

  if (fieldComplete) {
    return (
      <div className={styles.completeScreen}>
        <div className={styles.mainVictoryArea}>
          <h1 className={styles.victoryTitle}>MISSION COMPLETE</h1>
          <div className={styles.finalScoreCard}>
            <span className={styles.label}>Official Finish Time:</span>
            <span className={styles.finalValue}>{formatTime(finalTime)}</span>
          </div>
          {playerRank !== null && (
            <div className={styles.rankBadge}>
              You ranked <strong>#{playerRank}</strong> on this mission
            </div>
          )}
          <button onClick={() => navigate("/")} className={styles.playAgainBtn}>
            Return to Mission Select
          </button>
        </div>

        <aside className={styles.leaderboardSidebar}>
          <h3 className={styles.sidebarTitle}>Leaders</h3>
          <div className={styles.leaderList}>
            {leaders.map((l, i) => (
              <div key={l.id || i} className={styles.leaderRow}>
                <span className={styles.rank}>{i + 1}</span>
                <span className={styles.name}>
                  {l.user?.username ?? "Anonymous"}
                </span>
                <span className={styles.time}>{formatTime(l.timeTaken)}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    );
  }

  return (
    <div className={styles.gameContainer}>
      <header className={styles.gameHeader}>
        <div className={styles.targetList}>
          {characters.map((c) => (
            <div
              key={c.id}
              className={`${styles.targetItem} ${c.found ? styles.found : ""}`}
            >
              {c.name}
            </div>
          ))}
        </div>
        <div className={styles.timerDisplay}>
          ⏱ <span>{formatTime(elapsed)}</span>
        </div>
      </header>

      {message && <div className={styles.toast}>{message}</div>}

      <main className={styles.stage}>
        {currentImage && (
          <div
            ref={containerRef}
            className={styles.imageContainer}
            onClick={handleImageClick}
          >
            <img
              src={currentImage.url}
              alt="Game Field"
              className={styles.gameMap}
              draggable={false}
            />

            {selection && (
              <div
                className={styles.selectionCircle}
                style={{ left: `${selection.x}%`, top: `${selection.y}%` }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={styles.dropdown}
                  style={getDropdownStyle(selection)}
                >
                  <p className={styles.dropdownTitle}>Identify Target</p>
                  {availableChars.length === 0 ? (
                    <p className={styles.noTargets}>All found!</p>
                  ) : (
                    availableChars.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleGuess(c.name)}
                        className={styles.guessBtn}
                        disabled={loading}
                      >
                        {c.name}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className={styles.gameControls}>
        <button
          onClick={handleNext}
          disabled={!allFound || loading}
          className={styles.nextBtn}
        >
          {loading ? "Processing..." : "Continue →"}
        </button>
      </footer>
    </div>
  );
}
