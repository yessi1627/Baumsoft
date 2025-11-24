import "./AlbumTable.css";

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumTableProps {
  albums: Album[];
}

export default function AlbumTable({ albums }: AlbumTableProps) {
  return (
    <div className="table-container">
      <table className="album-table">
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
    </div>
  );
}
