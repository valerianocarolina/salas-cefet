import { useState } from "react";
import { RoomCard, type Room } from "./components/RoomCard";
import salasData from "./data/salas.json";
import type { Sala } from "./types/sala";
import { getSalasLivres } from "./utils/salas";
import { horaParaHorario } from "./utils/horario";
import styles from "./styles.module.css";

function App() {
  const [bloco, setBloco] = useState("");
  const salas = salasData.map((item) => ({
    ...item,
    sala: String(item.sala),
  })) as Sala[];
  const [time, setTime] = useState(() => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  });
  const [rooms, setRooms] = useState<Room[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!bloco) return;

    setLoading(true);
    setRooms(null);

    setTimeout(() => {
      const dia = getDiaAtual();
      const horario = horaParaHorario(time);

      if (!horario) {
        setRooms([]);
        setLoading(false);
        return;
      }

      const livres = getSalasLivres(salas, bloco, dia, horario);

      const resultado = livres.map((s) => ({
        name: `Sala ${s.sala}`,
        status: "Livre" as const,
      }));

      setRooms(resultado);
      setLoading(false);
    }, 800);
  };

  function getDiaAtual(): string {
    const dias = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
    return dias[new Date().getDay()];
  }

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
          <h1>Salas Livres - CEFET Timóteo</h1>
          <p>
            Consulte salas disponíveis em tempo real
          </p>
      </header>

        <section className={styles.formSection}>

          <div className={styles.formGroup}>
            <label htmlFor="block-select">Selecione o bloco</label>
            <select
              id="block-select"
              value={bloco}
              onChange={(event) => setBloco(event.target.value)}

            >
              <option value="">Escolha um bloco</option>
              <option value="A">Bloco A</option>
              <option value="B">Bloco B</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="time-input">Horário</label>
            <input
              id="time-input"
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>

          <button
            className={styles.searchButton}
            onClick={handleSearch}
            disabled={!bloco || loading}
          >
            {loading ? "Buscando..." : "Ver salas disponíveis"}
          </button>
        </section>

        <section className={styles.resultsSection}>
          {loading && (
            <div className="loading-state">
              <div className="loader-dot"></div>
              <div className="loader-dot"></div>
              <div className="loader-dot"></div>
            </div>
          )}

          {rooms !== null && !loading && rooms.length === 0 && (
            <div className={styles.noResults}>
              Nenhuma sala disponível neste horário.
            </div>
          )}

          {rooms !== null && !loading && rooms.length > 0 && (
            <div className={styles.roomsGrid}>
              {rooms.map((room) => (
                <RoomCard key={room.name} room={room} />
              ))}
            </div>
          )}
        </section>

      <footer className={styles.footer}>
        Projeto acadêmico - CEFET-MG Timóteo
      </footer>
    </div>
  );
}

export default App;
