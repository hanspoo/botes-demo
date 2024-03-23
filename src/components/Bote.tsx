type BoteProps = {
  bote: Bote;
};
export function Bote({ bote }: BoteProps) {
  return <p>Soy el bote {bote.nombre} </p>;
}
