export default function ContentForm({ form, setForm, onSubmit, btnText }) {
  return (
    <div>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button onClick={onSubmit}>{btnText}</button>
    </div>
  );
}