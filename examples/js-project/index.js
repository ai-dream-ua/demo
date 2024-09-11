async function fetchAListOfDogs() {
  const listOfDogs = await fetch('https://dummyjson.com/todos')
  .then(res => res.json())

  console.log(listOfDogs);
}

async function main() {
  fetchAListOfDogs();
}

main();
