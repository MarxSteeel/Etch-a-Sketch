// Function Definitions

function makeGrid(rows, columns) {
	const container = document.querySelector(".container")
  for (let i = 0; i < rows; i++) {
		let row = document.createElement("div");
		row.classList.toggle("row");
		container.appendChild(row);
    for (let j = 0; j < columns; j++) {
			let column = document.createElement("div");
			column.classList.toggle("column");
			row.appendChild(column);
    }
  }
}

// Doing shit

makeGrid(16, 16);

const button = document.querySelector(".size button");
button.addEventListener("click", function() {
	const container = document.querySelector(".container");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	const rows = document.querySelector("#rows").value;
	const columns = document.querySelector("#columns").value;
	makeGrid(rows, columns);
})

let container = document.querySelector(".container");
container.addEventListener("mouseover", function(e) {
	e.target.style.backgroundColor = "black";
});