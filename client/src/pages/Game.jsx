import { useAuth } from "../components/context/useAuth";
import { useEffect, useState } from "react";
import { getFirstImage, sendGuess, nextImage } from "../services/fieldService";
import { useParams } from "react-router";
import { getImageCoords } from "../utils/click";

export default function Game() {
  const [currentImage, setCurrentImage] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const [clickedCoords, setClickedCoords] = useState(null);
  const [marker, setMarker] = useState(null);
  const [dropdownPos, setDropdownPos] = useState(null);

  const { token } = useAuth();
  const { id } = useParams();

  // 🔹 Load first image
  useEffect(() => {
    async function fetchImage() {
      try {
        setLoading(true);

        const data = await getFirstImage(token, id);

        setCurrentImage(data.image);
        setCharacters(data.characters);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [token, id]);

  // 🔹 Click image (set coords + UI marker + dropdown)
  const handleImageClick = (e) => {
    const coords = getImageCoords(e);

    setClickedCoords(coords);
    setMarker(coords);

    setDropdownPos({
      x: coords.x,
      y: coords.y,
    });
  };

  // 🔹 Close dropdown helper
  const closeDropdown = () => {
    setClickedCoords(null);
    setDropdownPos(null);
  };

  // 🔹 Guess character
  const handleGuess = async (characterId) => {
    if (!clickedCoords || loading) return;

    try {
      setLoading(true);

      const data = await sendGuess(token, id, clickedCoords, characterId);

      if (data.completed) {
        setFinished(true);
        return;
      }

      setCharacters(data.characters);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
      closeDropdown();
    }
  };

  // 🔹 Next image
  const handleNext = async () => {
    try {
      setLoading(true);

      const data = await nextImage(token, id);

      if (data.msg === "Field Completed!") {
        setFinished(true);
        return;
      }

      setCurrentImage(data.image);
      setCharacters(data.characters);
      setMarker(null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const allFound = characters.length > 0 && characters.every((c) => c.found);

  if (finished) {
    return (
      <div>
        <h2>🎉 Field Completed!</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Find the characters</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      {/* Character list */}
      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            {char.name} {char.found ? "✅" : "❌"}
          </li>
        ))}
      </ul>

      {/* Image container */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {currentImage && (
          <img
            src={currentImage.url}
            alt="game"
            onClick={handleImageClick}
            style={{ maxWidth: "100%", cursor: "crosshair" }}
          />
        )}

        {/* Click marker */}
        {marker && (
          <div
            style={{
              position: "absolute",
              left: `${marker.x}%`,
              top: `${marker.y}%`,
              width: "12px",
              height: "12px",
              background: "red",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Dropdown at click position */}
        {dropdownPos && (
          <div
            style={{
              position: "absolute",
              left: `${dropdownPos.x}%`,
              top: `${dropdownPos.y}%`,
              transform: "translate(-50%, -120%)",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "6px",
              zIndex: 1000,
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            {characters
              .filter((c) => !c.found)
              .map((char) => (
                <button
                  key={char.id}
                  onClick={() => handleGuess(char.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "4px 8px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {char.name}
                </button>
              ))}
          </div>
        )}
      </div>

      {/* Next button */}
      <button onClick={handleNext} disabled={!allFound || loading}>
        Next
      </button>
    </div>
  );
}
