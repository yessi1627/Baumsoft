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
  );
}
