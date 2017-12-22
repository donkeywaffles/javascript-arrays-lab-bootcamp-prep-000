const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];
var kittnes = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittnes = ['Milo', 'Otis', 'Garfield'];
  kittnes.unshift(name);
  return kittnes;
}