const triangle ={
  base: 20,
  altezza: 10


};


let areaTriangle =( `${triangle.base}` * `${triangle.altezza}`) / 2;

console.log(`l'area del triangolo è di ${areaTriangle}`)

let ipotenusa = (`${triangle.altezza}` ** 2 + `${triangle.base}` ** 2) **.5
 let perimetro = (triangle.base + triangle.altezza + ipotenusa)
 console.log(`Il perimetro del triangolo è  ${Math.ceil(perimetro)}`)
