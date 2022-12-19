// 2.1 y 2.2 -------------------------------------------------------
// creamos la constante para guardar el nuevo elemento creado
const newDiv = document.createElement("div");
// Le añadimos contenido al div y creamos una variable para el mismo
const newContent = document.createTextNode("Contenido de mi nuevo Div");
// console.log(newDiv);
// console.log(newContent);
// ahora toca meter el contenido en el div y el div en el html
newDiv.appendChild(newContent);
// console.log(newDiv)
// creo una const para acceder mas facil a nodo que necesito (repasar forma de llamar a las class, id etc)
const h2ForBefore = document.body.querySelector(".fn-insert-here");
const inserteNewDiv = document.body.insertBefore(newDiv, h2ForBefore);
// otra forma mas facil pero con menos control sobre donde entra
// console.log(h2ForBefore)
// const inserteNewDiv = document.body.appendChild(newDiv);
// console.log(newDiv);
// 2.2--------------------------------------------------
// creamos elementos
const newDivP = document.createElement("div");
const newP = document.createElement("p");
// metemos p como hijo dentro de div
newDivP.appendChild(newP);
console.log(newDivP);
// ahora toca meter la creación en el html y hacerlo realidad ;)
// voy a utilizar la misma const del ejercicio anterior con node donde quiero insertar el div nuevo
const inserteNewDivP = document.body.insertBefore(newDivP, h2ForBefore);
// 2.3--------------------------------------------------
// creo mi const para crear el nuevo div
const newDiv6P = document.createElement("div");
// creo el bucle que me fabricará los nuevos 6 elementos p
for (let i = 0; i < 6; i++) {
  const loopsixP = document.createElement("p");
  // hacemos que los 6p sean los hijos del div creado al comienzo
  newDiv6P.appendChild(loopsixP);
}
const inserteNewDiv6P = document.body.insertBefore(newDiv6P, h2ForBefore);
console.log(newDiv6P);
// 2.3--------------------------------------------------
const pDinamica = document.createElement("p");
const pDinamicaText = document.createTextNode(
  "Soy dinámico! y acompaño a p que está solita"
);
// ahora voy a meter el texto como hijo de p para que no esté solito
pDinamica.appendChild(pDinamicaText);
// ahora toca subir para que sea efectivo todo
// voy a crear un nuevo selector para insertar esta p
const selecPDinamica = document.querySelector(".pdinamica");
const insertePDinamica = document.body.insertBefore(pDinamica, selecPDinamica);
// 2.4--------------------------------------------------
// creamos la constante con el texto
const pWubba = document.createElement("p");
// preguntar si estas dos creaciones se pueden poner en una misma linea
const textWubba = document.createTextNode("Wubba Lubba dub dub");
// ahora meter a text dentro de la p
pWubba.appendChild(textWubba);
// ahora toca hacerlo realidad
const insertPWubba = document.body.insertBefore(pWubba, selecPDinamica);
// console.log(pWubba)
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
// primero lo convertimos a string
// no sirve// const stringApps = (apps.toString(","));
// console.log(stringApps) hecho, ahora toca convertirlo en lista
// creo el elemento ul
const ulNew = document.createElement("ul");
// debo crear un bucle para que me convierta la li
// sacamos los elementos en el bucle del array y los convertimos en li al final no lo hice así
// un for of para recorrer lo que hay dentro de array
for (const app of apps) {
// creamos los elementos li
const newLi = document.createElement("li");
// esto he tenido que mirarlo aqui metemeos el contenido de los elementos de la lista igualando a los mismos
newLi.textContent = app;
console.log(newLi)
}
// 2.7--------------------------------------------------
const itemserase = document.querySelectorAll(".fn-remove-me")
console.log(itemserase);
for(const item of itemserase) {
item.remove();
}
// 2.8--------------------------------------------------
const enMedioP = document.createElement("p");
// buscar la forma de no usar appendChild para darle compañia a p
enMedioP.textContent = 'Voy en medio!';
// console.log(enMedioP)
// para insertarlo debo crear un querySelector
const whereEnMedioP = document.querySelector(".enMedioAqui")
console.log(whereEnMedioP)
const insertEnMedioP = document.body.insertBefore(enMedioP, whereEnMedioP);
// 2.8--------------------------------------------------
// cree aqui las variables y el texto pero me dí cuenta que no funcionaba en el for así que al meterla en el mirmo todo solucionado
const selectorAllDivs = document.querySelectorAll('.fn-insert-here');
console.log(selectorAllDivs)
for (const allDivs of selectorAllDivs) {
const pPadentro = document.createElement('p');
pPadentro.textContent = "Voy dentro!";
allDivs.appendChild(pPadentro)
}
