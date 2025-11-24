import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface HomeProps {
  onLogout: () => void;
}

export default function Home({ onLogout }: HomeProps) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [noHayMas, setNoHayMas] = useState(false); // ⭐ Nuevo estado

  useEffect(() => {
    cargarAlbums();
  }, [page]);

  const cargarAlbums = async () => {
    try {
      setLoading(true);
      setError("");
      setNoHayMas(false); // Al cambiar de página reiniciamos el mensaje

      // Pedimos 10 registros por página
      const response = await api.get(`/albums?_page=${page}&_limit=10`);

      // Si trae menos de 10 → ya no hay más datos para mostrar
      if (response.data.length < 10) {
        setNoHayMas(true);
      }

      setAlbums(response.data);
    } catch (err) {
      setError("Error al cargar los datos.");
    } finally {
    setTimeout(() => {
    setLoading(false);
  }, 500); 
}

  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Álbumes</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border={1} cellPadding={10} style={{ marginBottom: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {loading && (
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#26ae1aff",
            marginBottom: "20px",
          }}
        >
          Cargando datos de la tabla...
        </p>
      )}

      {noHayMas && !loading && (
        <p style={{ color: "#26ae1aff", marginBottom: 20 }}>
          No hay más álbumes para mostrar.
        </p>
      )}

      <div style={{ marginBottom: 20 }}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1 || loading}>
          Anterior
        </button>

        <span style={{ margin: "0 10px" }}>Página {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={loading || noHayMas}>
          Siguiente
        </button>
      </div>

      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}
