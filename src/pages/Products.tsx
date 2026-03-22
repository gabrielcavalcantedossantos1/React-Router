import { useParams } from "react-router-dom";

export function Products() {
  const { id } = useParams();
  return (
    <div>
      <strong>Essa é a página Products</strong>

      <p>id: {id}</p>
    </div>
  );
}
