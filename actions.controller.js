const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const actions = {
  createName: createName
}

function listActions() {
  let answer;
  console.log("Acciones Disponibles: ");
  console.log("> crearNombre ");
  console.log("> salir");
  console.log("");
  rl.question('¿Que opción eliges?: ', ( answer ) => {
    this.answer = answer;
  })
  rl.close();
  return answer;
}

function actionsHandler( option ) {
  return actions[option] || listActions;
}

function createName() {
  rl.question('¿Cómo se llama el heroe?: ', ( answer ) => {
    console.log(`El nombre elegido es: ${answer}`)
  })
  rl.close();
}

function exitGenerator() {
  process.exit();
}

module.exports = { listActions, actionsHandler };