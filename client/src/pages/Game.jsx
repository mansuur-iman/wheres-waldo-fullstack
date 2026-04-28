import { useAuth } from "../context/useAuth";
import { useEffect, useState, useRef } from "react";
import {
  getFirstImage,
  sendGuess,
  nextImage,
  getLeaders,
} from "../services/fieldService";
import { useParams } from "react-router";

export default function Game() {
  const { token } = useAuth();
  const { id } = useParams();

  const [currentImage, setCurrentImage] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [selection, setSelection] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [leaders, setLeaders] = useState([]);
  const [fieldComplete, setFieldComplete] = useState(false);

  // ─── TIMER ───
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const startTimer = () => {
    startTimeRef.current = Date.now() - elapsed * 1000;
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const fetchLeaders = async () => {
    try {
      const data = await getLeaders(id);
      setLeaders(data.leaders || []);
    } catch (e) {
      console.error(e);
    }
  };

  // ─── LOAD IMAGE ───
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await getFirstImage(token, id);
        setCurrentImage(data.image);
        setCharacters(data.characters || []);
        startTimer(); // start timer when game loads
      } catch (e) {
        console.error(e);
        setError(e.message || "Error loading game");
      }
      setLoading(false);
    };

    load();
    fetchLeaders();

    return () => stopTimer(); // cleanup on unmount
  }, [token, id]);

  // ─── GET CLICK POSITION ───
  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  };

  // ─── HANDLE CLICK ───
  const handleClick = (e) => {
    const pos = getPos(e);
    setSelection(pos);
  };

  // ─── HANDLE GUESS ───
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
        setMessage("✅ Correct!");
        setCharacters((prev) =>
          prev.map((c) =>
            c.name === characterName ? { ...c, found: true } : c,
          ),
        );
        setSelection(null);
      } else {
        setMessage("❌ Wrong! Try again.");
      }
    } catch (e) {
      console.error(e);
      alert(e.message || "Error sending guess");
    } finally {
      setLoading(false);
    }
  };

  // ─── NEXT IMAGE ───
  const handleNext = async () => {
    setLoading(true);
    setSelection(null);
    setMessage(null);
    try {
      const data = await nextImage(token, id);

      // backend returns null/empty when no more images
      if (!data.image) {
        stopTimer();
        setFieldComplete(true);
        fetchLeaders(); // refresh leaderboard on completion
        setLoading(false);
        return;
      }

      setCurrentImage(data.image);
      setCharacters(data.characters || []);
    } catch (e) {
      // treat a 404 or similar as field complete
      stopTimer();
      setFieldComplete(true);
      fetchLeaders();
    }
    setLoading(false);
  };

  const availableChars = characters.filter((c) => !c.found);
  const allFound = characters.length > 0 && availableChars.length === 0;

  // ─── FIELD COMPLETE SCREEN ───
  if (fieldComplete) {
    return (
      <div
        style={{
          background: "#111",
          color: "#fff",
          minHeight: "100vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "lime", marginTop: "80px" }}>🎉 Field Complete!</h1>
        <p style={{ fontSize: "20px" }}>
          You finished in{" "}
          <strong style={{ color: "yellow" }}>{formatTime(elapsed)}</strong>
        </p>

        {leaders.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <h3>Leaderboard</h3>
            <ol style={{ display: "inline-block", textAlign: "left" }}>
              {leaders.map((l, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {l.user?.username ?? l.username} —{" "}
                  <strong style={{ color: "yellow" }}>
                    {formatTime(l.timeTaken)}
                  </strong>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p>{message}</p>}

      {/* ─── HEADER ROW ─── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* ─── TARGET LIST ─── */}
        <div>
          <h3>Target Characters:</h3>
          <ol>
            {characters.map((c) => (
              <li
                key={c.id}
                style={{
                  marginRight: "15px",
                  color: c.found ? "lime" : "white",
                }}
              >
                {c.name} {c.found ? "✅" : "⚪"}
              </li>
            ))}
          </ol>
        </div>

        {/* ─── TIMER ─── */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "monospace",
            color: "yellow",
            padding: "10px 20px",
            border: "2px solid yellow",
            borderRadius: "8px",
          }}
        >
          ⏱ {formatTime(elapsed)}
        </div>
      </div>

      <hr />

      {currentImage && (
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          <img
            ref={imgRef}
            src={currentImage.url}
            alt="game"
            onLoad={() => {
              canvasRef.current.width = imgRef.current.width;
              canvasRef.current.height = imgRef.current.height;
            }}
            style={{ display: "block", userSelect: "none" }}
          />

          <canvas
            ref={canvasRef}
            onClick={handleClick}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              cursor: "crosshair",
            }}
          />

          {/* ─── CLICK MARKER ─── */}
          {selection && (
            <div
              style={{
                position: "absolute",
                left: `${selection.x}%`,
                top: `${selection.y}%`,
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: "10px",
                background: "yellow",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
          )}

          {/* ─── DROPDOWN ─── */}
          {selection && availableChars.length > 0 && (
            <div
              style={{
                position: "absolute",
                left: `${selection.x}%`,
                top: `${selection.y}%`,
                background: "white",
                padding: "10px",
                borderRadius: "5px",
                zIndex: 100,
              }}
            >
              <strong style={{ color: "black" }}>Who is this?</strong>
              {availableChars.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleGuess(c.name)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─── LEADERBOARD ─── */}
      {leaders.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>Leaderboard:</h3>
          <ol>
            {leaders.map((l, index) => (
              <li key={index}>
                {l.user?.username ?? l.username} —{" "}
                <strong style={{ color: "yellow" }}>
                  {formatTime(l.timeTaken)}
                </strong>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ─── NEXT BUTTON ─── */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={handleNext}
          disabled={!allFound || loading}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: allFound ? "pointer" : "not-allowed",
          }}
        >
          {loading ? "Loading..." : "Next Image →"}
        </button>
      </div>
    </div>
  );
}
