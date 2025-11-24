import { useEffect, useState } from "react";
import { api } from "../../services/api";

import AlbumTable from "../../components/TableAlbums/AlbumTable";
import Pagination from "../../components/Paginator/Pagination";
import Loader from "../../components/Loader/Loader";

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
  const [noHayMas, setNoHayMas] = useState(false);

  useEffect(() => {
    cargarAlbums();
  }, [page]);

  const cargarAlbums = async () => {
    try {
      setLoading(true);
      setError("");
      setNoHayMas(false);

      const response = await api.get(`/albums?_page=${page}&_limit=10`);

      if (response.data.length < 10) {
        setNoHayMas(true);
      }

      setAlbums(response.data);
    } catch (err) {
      setError("Error al cargar los datos.");
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Álbumes</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <AlbumTable albums={albums} />

      {loading && <Loader />}

      {!loading && noHayMas && (
        <p style={{ color: "#26ae1aff", marginBottom: 20 }}>
          No hay más álbumes para mostrar.
        </p>
      )}

      <Pagination
        page={page}
        loading={loading}
        noHayMas={noHayMas}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => p + 1)}
      />

      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}
