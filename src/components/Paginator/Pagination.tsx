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
  onNext
}: PaginationProps) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={onPrev} disabled={page === 1 || loading}>
        Anterior
      </button>

      <span style={{ margin: "0 10px" }}>Página {page}</span>

      <button onClick={onNext} disabled={loading || noHayMas}>
        Siguiente
      </button>
    </div>
  );
}
