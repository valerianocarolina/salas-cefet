const horarios = [
  { codigo: "M1", inicio: "07:00", fim: "07:50" },
  { codigo: "M2", inicio: "07:50", fim: "08:40" },
  { codigo: "M3", inicio: "08:55", fim: "09:45" },
  { codigo: "M4", inicio: "09:45", fim: "10:35" },
  { codigo: "M5", inicio: "10:50", fim: "11:40" },
  { codigo: "M6", inicio: "11:40", fim: "12:30" },
  { codigo: "T1", inicio: "13:00", fim: "13:50" },
  { codigo: "T2", inicio: "13:50", fim: "14:40" },
  { codigo: "T3", inicio: "14:55", fim: "15:45" },
  { codigo: "T4", inicio: "15:45", fim: "16:35" },
  { codigo: "T5", inicio: "16:35", fim: "17:25" },
  { codigo: "T6", inicio: "17:25", fim: "18:15" },
  { codigo: "N1", inicio: "18:10", fim: "19:00" },
  { codigo: "N2", inicio: "19:00", fim: "19:50" },
  { codigo: "N3", inicio: "20:05", fim: "20:55" },
  { codigo: "N4", inicio: "20:55", fim: "21:45" },
  { codigo: "N5", inicio: "21:45", fim: "22:35" }
];

export function getHorarioAtual() {
  const now = new Date();
  const minutos = now.getHours() * 60 + now.getMinutes();

  for (const h of horarios) {
    const [hi, mi] = h.inicio.split(":").map(Number);
    const [hf, mf] = h.fim.split(":").map(Number);

    const inicio = hi * 60 + mi;
    const fim = hf * 60 + mf;

    if (minutos >= inicio && minutos < fim) {
      return h.codigo;
    }
  }

  return null;
}

export function horaParaHorario(hora: string): string | null {
  const [h, m] = hora.split(":").map(Number);
  const minutos = h * 60 + m;

  for (const horario of horarios) {
    const [hi, mi] = horario.inicio.split(":").map(Number);
    const [hf, mf] = horario.fim.split(":").map(Number);

    const inicio = hi * 60 + mi;
    const fim = hf * 60 + mf;

    if (minutos >= inicio && minutos < fim) {
      return horario.codigo;
    }
  }

  return null;
}