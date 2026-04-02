import { useState } from "react";
import { registerUser } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleRegister = async () => {
    await registerUser(form);
    alert("Registered Successfully");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
