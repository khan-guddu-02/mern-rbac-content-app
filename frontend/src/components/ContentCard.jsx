export default function ContentCard({ item, user, onDelete }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>

      {user?.role === "admin" && (
        <>
          <button onClick={() => window.location.href=`/edit/${item._id}`}>
            Edit
          </button>
          <button onClick={() => onDelete(item._id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}