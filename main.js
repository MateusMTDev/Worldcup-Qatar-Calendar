function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: 0.4s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
//
//
function MA() {
  document.querySelector("#cards").innerHTML =
    createCard("20/11", "DOMINGO", createGame("Qatar", "13:00", "ecuador")) +
    createCard(
      "21/11",
      "segunda",
      createGame("senegal", "13:00", "netherlands")
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("Qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador")
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("ecuador", "12:00", "senegal") +
        createGame("netherlands", "12:00", "Qatar")
    )
}
function MB() {
  document.querySelector("#cards").innerHTML =
    createCard(
      "21/11",
      "SEGUNDA",
      createGame("england", "13:00", "iran") +
        createGame("USA", "13:00", "wales")
    ) +
    createCard(
      "25/11",
      "segunda",
      createGame("wales", "07:00", "iran") +
        createGame("USA", "16:00", "england")
    ) +
    createCard(
      "29/11",
      "segunda",
      createGame("wales", "07:00", "england") +
        createGame("USA", "16:00", "iran")
    )
}
function MC() {
  document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "TERÇA",
      createGame("argentina", "07:00", "arabia") +
        createGame("mexico", "13:00", "poland")
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("poland", "10:00", "arabia") +
        createGame("argentina", "16:00", "mexico")
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("argentina", "16:00", "poland") +
        createGame("mexico", "16:00", "arabia")
    )
}
function MD() {
  document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "TERÇA",
      createGame("dinamarca", "10:00", "tunisia") +
        createGame("frança", "16:00", "australia")
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("tunisia", "07:00", "australia") +
        createGame("dinamarca", "13:00", "frança")
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("frança", "12:00", "tunisia") +
        createGame("australia", "12:00", "dinamarca")
    )
}
function ME() {
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("alemanha", "10:00", "japao") +
        createGame("spain", "13:00", "costa-rica")
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("japao", "07:00", "costa-rica") +
        createGame("spain", "16:00", "alemanha")
    ) +
    createCard(
      "01/11",
      "quinta",
      createGame("japao", "16:00", "spain") +
        createGame("costa-rica", "16:00", "alemanha")
    )
}

function MF() {
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("croacia", "07:00", "marrocos") +
        createGame("belgica", "16:00", "canada")
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("belgica", "10:00", "marrocos") +
        createGame("croacia", "13:00", "canada")
    ) +
    createCard(
      "01/11",
      "quinta",
      createGame("belgica", "12:00", "croacia") +
        createGame("canada", "12:00", "marrocos")
    )
}

function MG() {
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "07:00", "cameroom") +
        createGame("brazil", "16:00", "serbia")
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("cameroom", "07:00", "serbia") +
        createGame("brazil", "13:00", "switzerland")
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("brazil", "16:00", "cameroom") +
        createGame("serbia", "16:00", "switzerland")
    )
}
function MH() {
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "quinta",
      createGame("uruguai", "10:00", "korea") +
        createGame("portugal", "13:00", "ghana")
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("korea", "10:00", "ghana") +
        createGame("portugal", "16:00", "uruguai")
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("korea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguai")
    )
}
  

let changeColor = document.querySelector("body")

document.querySelector("#yellow").addEventListener("click", function () {
  changeColor.classList.remove("green")
  changeColor.classList.remove("blue")
})
document.querySelector("#yellow2").addEventListener("click", function () {
  changeColor.classList.remove("green")
  changeColor.classList.remove("blue")
})
document.querySelector("#yellow3").addEventListener("click", function () {
  changeColor.classList.remove("green")
  changeColor.classList.remove("blue")
})
document.querySelector("#blue").addEventListener("click", function () {
  changeColor.classList.remove("green")
  changeColor.classList.add("blue")
})
document.querySelector("#blue2").addEventListener("click", function () {
  changeColor.classList.remove("green")
  changeColor.classList.add("blue")
})
document.querySelector("#blue3").addEventListener("click", function () {
  changeColor.classList.remove("green")
  changeColor.classList.add("blue")
})
document.querySelector("#green").addEventListener("click", function () {
  changeColor.classList.add("green")
})
document.querySelector("#green2").addEventListener("click", function () {
  changeColor.classList.add("green")
})
