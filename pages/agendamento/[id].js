// pages/agendamento/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Detalhes() {
  const { query, isReady } = useRouter();
  const [agendamento, setAgendamento] = useState(null);

  useEffect(() => {
    if (!isReady) return;
    fetch(`http://localhost:4000/agendamentos/${query.id}`)
      .then((r) => r.json())
      .then(setAgendamento)
      .catch(console.error);
  }, [isReady, query.id]);

  if (!agendamento) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h1>Detalhes do Agendamento</h1>
      <p><strong>Nome:</strong> {agendamento.nome}</p>
      <p><strong>Data:</strong> {agendamento.data}</p>
      <p><strong>Hora:</strong> {agendamento.hora}</p>
      <button onClick={() => history.back()}>← Voltar</button>
    </div>
  );
}
