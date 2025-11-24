export default function Home({ onLogout }: { onLogout: () => void }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenido al Home</h1>

      <button onClick={onLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
