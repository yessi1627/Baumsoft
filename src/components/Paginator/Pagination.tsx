import "./Pagination.css";

interface PaginationProps {
  page: number;
  loading: boolean;
  noHayMas: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({
  page,
  loading,
  noHayMas,
  onPrev,
  onNext,
}: PaginationProps) {
  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={onPrev}
        disabled={page === 1 || loading}
      >
        Anterior
      </button>

      <span className="pagination-page">Página {page}</span>

      <button
        className="pagination-btn"
        onClick={onNext}
        disabled={loading || noHayMas}
      >
        Siguiente
      </button>
    </div>
  );
}
