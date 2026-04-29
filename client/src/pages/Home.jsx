import { useEffect, useState } from "react";
import { getFields } from "../services/fieldService";
import { Link } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  const [fields, setFields] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchFields = async () => {
      try {
        setLoading(true);
        const data = await getFields();
        if (isMounted) setFields(data);
      } catch (err) {
        if (isMounted) setError(err.message || "Failed to load fields");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchFields();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading && fields.length === 0) {
    return (
      <div className={styles.fullLoader}>
        <div className={styles.spinner}></div>
        <p>Loading maps...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}

      <h1 className={styles.title}>Find a scene and spot Waldo</h1>

      <div className={styles.grid}>
        {fields.map((field) => (
          <Link
            key={field.id}
            to={`/field/${field.id}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img
                src={field.thumbnailUrl}
                alt={field.name}
                className={styles.thumbnail}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span>Play Now</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.fieldName}>{field.name}</h3>
              <p className={styles.description}>{field.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
