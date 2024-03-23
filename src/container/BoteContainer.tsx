import { useParams } from "react-router-dom";
import { Bote } from "../components/Bote";
import { BoteDatabase } from "../database/BoteDatabase";

export function BoteContainer() {
  const params = useParams();

  if (!params.id) return <p>No viene el id del bote </p>;

  const bote = BoteDatabase.find(params.id);
  return <Bote bote={bote} />;
}
