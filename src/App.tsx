import salasData from "./data/salas.json";
import type { Sala } from "./types/sala";
import { getSalasLivres } from "./utils/salas";
import { getHorarioAtual } from "./utils/horario";

function getDiaAtual() {
  const dias = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
  return dias[new Date().getDay()];
}

function App() {
  const salas = salasData as Sala[];

  const bloco: string = "B";
  const dia: string = getDiaAtual();
  const horario: string | null = getHorarioAtual();

  if (!horario) return <p>Fora do horário de aula</p>;

  const livres = getSalasLivres(salas, bloco, dia, horario);

  return (
    <div>
      <h1>Salas livres agora</h1>

      <p>Dia: {dia}</p>
      <p>Horário: {horario}</p>

      {livres.length === 0 ? (
        <p>Nenhuma sala disponível</p>
      ) : (
        livres.map((s) => (
          <div key={s.sala}>{s.sala}</div>
        ))
      )}
    </div>
  );
}

export default App;