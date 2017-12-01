const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const actions = {
  createName: createName
}

function listActions() {
  console.log("Acciones Disponibles: ");
  console.log("> crearNombre ");
  console.log("> salir");
  console.log("");
  rl.question('¿Que opción eliges?: ', ( answer ) => {
    rl.close();
    return answer;
  })
}

function actionsHandler() {

}

function createName() {
  rl.question('¿Cómo se llama el heroe?: ', ( answer ) => {
    console.log(`El nombre elegido es: ${answer}`)

    rl.close();
  })
}

module.exports = { listActions, actionsHandler };