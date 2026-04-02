export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>My App</h2>

      {user ? (
        <>
          <span>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => window.location.href="/login"}>Login</button>
          <button onClick={() => window.location.href="/register"}>Register</button>
        </>
      )}
    </div>
  );
}