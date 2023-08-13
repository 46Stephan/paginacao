const express = require("express");
const app = express();
const port = 3000;

const recados = [];

app.use(express.json());

app.get("/recados", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const recadosPerPage = 5;
  const startIndex = (page - 1) * PerPage;
  const endIndex = page * PerPage;
  const currentRecados = recados.slice(startIndex, endIndex);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const recadosPerPage = 5;
let currentRecados = 1;

function displayRecados() {
  const recadosList = document.getElementById("recados-list");
  recadosList.innerHTML = "";

  const startIndex = (currentRecados - 1) * recadosPerPage;
  const endIndex = currentRecados + recadosPerPage;
  const currentRecados = recados.slice(startIndex, endIndex);

  currentRecados.forEach((recado) => {
    const recadoDiv = document.createElement("div");
    recadoDiv.classList.add("recado");
    recadoDiv.innerHTML = `<h2>${recado.titulo}</h2>
    <p>${recado.descricao}</p>
    <p>${recado.autor}</p>
    <p>${recado.data}</p>
    <a href="/recados/${recado.id}">Editar</a>`;
    recadosList.appendChild(recadoDiv);
  });

  displayPagination();
}

function displayPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";

  const totalPages = Math.ceil(recados.length / recadosPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", () => {
      currentRecados = i;
      displayRecados();
    });
    paginationDiv.appendChild(button);
  }
}

displayRecados();
