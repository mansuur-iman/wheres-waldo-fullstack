import { useEffect, useState } from "react";
import { getFields } from "../services/fieldService";
import { Link } from "react-router";

export default function Home() {
  const [fields, setFields] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFields() {
      try {
        setLoading(true);
        const data = await getFields();
        console.log("All fields", data);
        setFields(data.fields);
      } catch (err) {
        console.error("Fields Error", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFields();
  }, []);
  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <h1>Choose a field to play</h1>
      {fields.map((field) => (
        <Link key={field.id} to={`/field/${field.id}`}>
          <div>
            <h3>{field.name}</h3>
            <img src={field.thumbnailUrl} alt={field.name} />
            <p>{field.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
