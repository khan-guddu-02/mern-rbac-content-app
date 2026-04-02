import { useState } from "react";
import { createContent } from "../services/api";
import ContentForm from "../components/ContentForm";

export default function CreateContent() {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleSubmit = async () => {
    await createContent(form);
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Create Content</h2>

      <ContentForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        btnText="Create"
      />
    </div>
  );
}