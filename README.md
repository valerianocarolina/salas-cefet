# 🏫 Salas Livres — CEFET Timóteo

Aplicação web para consulta de salas disponíveis em tempo real no CEFET-MG (Campus Timóteo), baseada na grade horária oficial da instituição.

---

## 📌 Sobre o projeto

Este projeto tem como objetivo facilitar a visualização de salas livres dentro do campus, permitindo que alunos encontrem rapidamente espaços disponíveis para estudo, trabalhos em grupo ou atividades acadêmicas.

A aplicação utiliza os horários oficiais disponibilizados pelo CEFET e transforma esses dados em uma interface simples, rápida e intuitiva.

---

## 🚀 Funcionalidades

* 🔎 Seleção de bloco (ex: Bloco B)
* ⏰ Detecção automática do horário atual
* 📅 Identificação do dia da semana
* 🟢 Listagem de salas disponíveis em tempo real
* 📱 Interface responsiva e minimalista

---

## 🧠 Como funciona

Os dados de ocupação das salas são baseados na grade horária institucional.

A lógica da aplicação:

1. Cada sala possui uma lista de horários ocupados
2. O sistema identifica o dia e horário atual
3. Filtra as salas que **não estão ocupadas naquele momento**
4. Exibe apenas as salas livres

---

## 🛠️ Tecnologias utilizadas

* ⚛️ React
* ⚡ Vite
* 🟦 TypeScript
* 🎨 CSS

---

## 📂 Estrutura do projeto

```
src/
 ├── components/     # Componentes reutilizáveis
 ├── data/           # Dados das salas (JSON)
 ├── utils/          # Funções auxiliares
 ├── pages/          # Páginas da aplicação
 └── App.tsx
```

---

## 📊 Estrutura dos dados

Exemplo de como as salas são representadas:

```json
{
  "sala": "B07",
  "bloco": "B",
  "ocupacoes": [
    { "dia": "seg", "horario": "M1" },
    { "dia": "seg", "horario": "M2" }
  ]
}
```

---

## ▶️ Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/salas-cefet.git
```

Acesse a pasta:

```bash
cd salas-cefet
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👩‍💻 Autor

Desenvolvido por **Carolina Valeriano**

---

## ⭐ Contribuição

Sinta-se à vontade para abrir issues, sugestões ou pull requests!
