import type { Sala } from "../types/sala";

export function salaEstaLivre(
  sala: Sala,
  dia: string,
  horario: string
): boolean {
  return !sala.ocupacoes.some(
    (o) => o.dia === dia && o.horario === horario
  );
}

export function getSalasLivres(
  salas: Sala[],
  bloco: string,
  dia: string,
  horario: string
): Sala[] {
  return salas
    .filter((s) => s.bloco === bloco)
    .filter((s) => salaEstaLivre(s, dia, horario));
}