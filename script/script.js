/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];

// hieronder komt jullie code - veel succes

// HTML - elementen selecteren
const registreerForm = document.querySelector("#registreerForm")
const nieuweNaam = document.querySelector("#name")
const nieuweMail = document.querySelector("#email")
const nieuweWachtwoord = document.querySelector("#password")
const registreerBtn = document.querySelector("#registreerBtn")
const filterForm = document.querySelector("#filterForm")
const inputFilter = document.querySelector("#filter")
const filterBtn = document.querySelector("#filterBtn")
const namenPrint = document.querySelector("#printNaampjes")
const johnWeg = document.querySelector("#verwijderenJohn")
const dubbelUser = document.querySelector("#dubbelUser")

// nieuwe user (werkt)
registreerBtn.addEventListener("click", () => {
  const nieuweUser = {
    fullname: nieuweNaam.value,
    email: nieuweMail.value,
    password: nieuweWachtwoord.value,
  }
  users.push(nieuweUser)
}) 

// john weg
namenPrint = johnWeg.innerHTML = ""

// namen printen in de li
function namenWeergeven () {
  namenPrint.innerHTML = "";
  users.forEach((naam, index) => {
    let li = document.createElement("li")
    li.textContent = `${users.fullname} - ${users.email}`
    namenPrint.appendChild(li)
  })
}


