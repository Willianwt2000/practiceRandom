//A=π⋅r 2 --- Area de un circulo

function areaCircle(r: number): number {
  const PI: number = Math.PI;
  let area: number = PI * (r ** 2);
  return area;
}

console.log(areaCircle(5));