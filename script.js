const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

//Criando uma constante do meu botão e localizado ele dentro do header
const button = document.querySelector("header button");

// Criando uma função para adicionar o dia
function add() {
  //Criando constante da data de hoje
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  //Creating and constant if dayExists or not
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já registrado ❌");
    return;
  }

  alert("Dia registrado com sucesso ✅");
  //Searching for function 'addDay' inside the library NLWSetup
  nlwSetup.addDay(today);
}

//When i click the button, this will add the add function

button.addEventListener("click", add);
form.addEventListener("change", save);

function save() {
  localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data));
}

//const data = {
//  run: ["01-02", "01-02", "01-03"],
//  workout: ["01-02", "01-02", "01-03"],
// water: ["01-02", "01-02", "01-03"],
// sleep: ["01-02", "01-02", "01-03"],
// walk: ["01-02", "01-02", "01-03"],
// food: ["01-02", "01-02", "01-03"],

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
