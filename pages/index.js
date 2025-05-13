import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  // agora data como Date
  const [data, setData] = useState(new Date());
  const [hora, setHora] = useState("");
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/agendamentos")
      .then((r) => r.json())
      .then(setAgendamentos)
      .catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // formata a data pro padrão ISO date
    const dataStr = data.toISOString().split("T")[0];
    const body = { nome, data: dataStr, hora };

    const res = await fetch("http://localhost:4000/agendamentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const novo = await res.json();
    setAgendamentos((prev) => [...prev, novo]);
    // redireciona para a página de detalhes
    router.push(`/agendamento/${novo.id}`);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/agendamentos/${id}`, { method: "DELETE" });
    setAgendamentos((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h1>Agendar Horário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:<br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Data:<br />
          <DatePicker
            selected={data}
            onChange={(date) => setData(date)}
            dateFormat="yyyy-MM-dd"
            required
          />
        </label>
        <br /><br />
        <label>
          Hora:<br />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Agendar</button>
      </form>

      <h2 style={{ marginTop: "2rem" }}>Agendamentos Existentes</h2>
      {agendamentos.length === 0 ? (
        <p>Nenhum agendamento.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {agendamentos.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: ".5rem",
                border: "1px solid #ccc",
                padding: ".5rem",
                borderRadius: 4,
              }}
            >
              <span>
                {item.nome} — {item.data} às {item.hora}
              </span>
              <div>
                <button
                  onClick={() => router.push(`/agendamento/${item.id}`)}
                  style={{ marginRight: "0.5rem" }}
                >
                  🔍
                </button>
                <button onClick={() => handleDelete(item.id)}>❌</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
