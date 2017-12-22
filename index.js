const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];
var kittnes = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittnes.unshift(name);
  return kittnes;
}