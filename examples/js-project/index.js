async function fetchAListOfDogs() {
  const listOfDogs = await fetch('https://dummyjson.com/todos')
  .then(res => res.json())

  console.log(listOfDogs);

  return listOfDogs;
}

async function fetchAListOfCats() {
  const listOfCats = await fetch('https://dummyjson.com/todos')
  .then(res => res.json())

  console.log(listOfCats);

  return listOfCats;
}

async function main() {
  fetchAListOfDogs();
  fetchAListOfCats();
}

main();
