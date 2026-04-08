export type Ocupacao = {
  dia: string;
  horario: string;
};

export type Sala = {
  sala: string;
  bloco: string;
  ocupacoes: Ocupacao[];
};