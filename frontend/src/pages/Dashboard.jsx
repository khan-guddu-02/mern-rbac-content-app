import React, { useEffect, useState } from "react";
import { getAllContent, deleteContent } from "../services/api.js";
import ContentCard from "../components/ContentCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await getAllContent();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteContent(id);
    fetchData();
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <button onClick={() => navigate("/create")}>Add Content</button>

      {data.map((item) => (
        <ContentCard
          key={item._id}
          content={item}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default Dashboard;