let colors = ["red", "blue", "green", "yellow", "purple"];

console.log(colors[0]) //first item
console.log(colors[colors.length - 1]) // last item
colors.splice(2, 1); // remove item in third position
colors.splice(2, 0, 'orange'); // add orange in index 3
console.log(colors)

