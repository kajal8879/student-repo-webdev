let starships;
document.addEventListener("DOMContentLoaded", function (event) {
  const url = "https://swapi.py4e.com/api/starships/";
  fetchData(url);
});

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Store the fetched data in the starships variable or perform any desired actions
      starships = data.results;
      console.log(starships); // Example: Log the starships data to the console
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
};

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.className = "ship";
  const nameCreditContainer = document.createElement("div");
  nameCreditContainer.className = "nameCreditContainer";
  const nameDiv = document.createElement("div");
  nameDiv.className = "nameDiv";
  nameDiv.innerHTML = spaceship.name;
  nameCreditContainer.appendChild(nameDiv);
  const creditsDiv = document.createElement("div");
  creditsDiv.className = "creditsDiv";
  const credit = parseInt(spaceship.cost_in_credits);
  creditsDiv.innerHTML = credit.toLocaleString() + "  credits";
  nameCreditContainer.appendChild(creditsDiv);
  container.appendChild(nameCreditContainer);
  const manufacturerDiv = document.createElement("div");
  manufacturerDiv.className = "manufacturerDiv";
  manufacturerDiv.innerHTML = "Manufactured by " + spaceship.manufacturer;
  container.appendChild(manufacturerDiv);
  const speedCapacityContainer = document.createElement("div");
  speedCapacityContainer.className = "speedCapacityContainer";
  const atmospheringSpeed = document.createElement("div");
  atmospheringSpeed.className = "atmospheringSpeed";
  atmospheringSpeed.innerHTML =
    "<b>" + spaceship.max_atmosphering_speed + "</b><br>Max atmosphering speed";
  speedCapacityContainer.appendChild(atmospheringSpeed);
  const cargoCapacity = document.createElement("div");
  cargoCapacity.className = "cargoCapacity";
  const capacity = parseInt(spaceship.cargo_capacity);
  cargoCapacity.innerHTML =
    "<b>" + capacity.toLocaleString() + "</b><br>Cargo capcity";
  speedCapacityContainer.appendChild(cargoCapacity);
  container.appendChild(speedCapacityContainer);
  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  const filteredstarships = input.filter(
    (ship) => parseFloat(ship.passengers) < 10 && parseFloat(ship.crew) > 1
  );
  return filteredstarships;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  let totalCost = input.reduce(function (accumulator, ship) {
    console.log(accumulator);
    console.log(parseFloat(ship.cost_in_credits));
    let cost = isNaN(parseFloat(ship.cost_in_credits))
      ? 0
      : parseFloat(ship.cost_in_credits);

    return accumulator + cost;
  }, 0);
  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
