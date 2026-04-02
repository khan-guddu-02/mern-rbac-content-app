import { useEffect, useState } from "react";
import { getAllContent, deleteContent } from "../services/api";
import ContentCard from "../components/ContentCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAllContent();
    setData(res.data);
  };

  const handleDelete = async (id) => {
    await deleteContent(id);
    fetchData();
  };

  return (
    <div>
      <Navbar />

      <h2>All Content</h2>

      {user?.role === "admin" && (
        <button onClick={() => (window.location.href = "/create")}>
          Create Content
        </button>
      )}

      {data.map((item) => (
        <ContentCard
          key={item._id}
          item={item}
          user={user}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}