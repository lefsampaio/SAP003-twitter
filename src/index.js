
const btnTwittar = document.getElementById("btnTwittar");
let texto1 = document.getElementById("tweet");
let texto2 = document.getElementById("tweetted");
let tweetArray = [];

//desabilita o botão no início
btnTwittar.disabled = true;

texto1.addEventListener("keyup", () => {


    if (texto1.value !== null && texto1.value !== '') {
        //habilita o botão
        btnTwittar.disabled = false;
    } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        btnTwittar.disabled = true;
    }
});




if (localStorage.getItem("tweet") != null) {
    tweetArray = JSON.parse(localStorage.getItem("tweet"));


    for (i = 0; i < tweetArray.length; i++) {
        texto2.innerHTML += `<p>${tweetArray[i]}</p>`;

    }

}


btnTwittar.addEventListener("click", () => {
    event.preventDefault();

    tweetArray.push(texto1.value);

    localStorage.setItem("tweet", JSON.stringify(tweetArray));

    texto2.innerHTML = "";

    for (i = 0; i < tweetArray.length; i++) {

        texto2.innerHTML += `<p>${tweetArray[i]}</p>`;


    }


}

);
