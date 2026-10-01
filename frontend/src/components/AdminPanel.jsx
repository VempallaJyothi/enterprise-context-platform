import { useState } from "react";
import { createDataSource, deleteDataSource } from "../services/api";
import { useAuth } from "../context/AuthContext";
import "../styles/AdminPanel.css";

function AdminPanel({ dataSources, onChanged }) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(null);
  const { token, logout } = useAuth();

  function handleError(err) {
    if (err.status === 401 || err.status === 403) {
      logout();
      setError("Your session expired. Please log in again.");
    } else {
      setError(err.message);
    }
  }

  async function handleAdd(event) {
    event.preventDefault();
    setError(null);
    try {
      await createDataSource(token, { name, icon });
      setName("");
      setIcon("");
      onChanged();
    } catch (err) {
      handleError(err);
    }
  }

  async function handleDelete(id) {
    setError(null);
    try {
      await deleteDataSource(token, id);
      onChanged();
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <section className="admin-panel">
      <h2 className="admin-panel__title">Manage Data Sources</h2>

      {error && <p className="admin-panel__error">{error}</p>}

      <form className="admin-panel__form" onSubmit={handleAdd}>
        <input
          className="admin-panel__input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="admin-panel__input admin-panel__input--icon"
          placeholder="Icon"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          required
        />
        <button className="admin-panel__button">Add</button>
      </form>

      <ul className="admin-panel__list">
        {dataSources.map((source) => (
          <li key={source.id} className="admin-panel__item">
            <span>
              {source.icon} {source.name}
            </span>
            <button
              className="admin-panel__delete"
              onClick={() => handleDelete(source.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdminPanel;