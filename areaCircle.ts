
// F=(°C× 5/9)+32  -- conversion de grado celcious a farenheig

function gradoCelsius(c:number) {
  const F = (c * (9/5) + 32)
  console.log(`

    `)
}

console.log(gradoCelsius(25));



//Area de un trianguglo

function areaTriangle(base:number, altura:number): number {
  let area = (base * altura) / 2
  return area;
}

console.log(areaTriangle(5,3))
