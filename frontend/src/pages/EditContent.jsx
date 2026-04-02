import { useEffect, useState } from "react";
import { getSingleContent, updateContent } from "../services/api";
import { useParams } from "react-router-dom";
import ContentForm from "../components/ContentForm";

export default function EditContent() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    getSingleContent(id).then((res) => setForm(res.data));
  }, [id]);

  const handleUpdate = async () => {
    await updateContent(id, form);
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Edit Content</h2>

      <ContentForm
        form={form}
        setForm={setForm}
        onSubmit={handleUpdate}
        btnText="Update"
      />
    </div>
  );
}