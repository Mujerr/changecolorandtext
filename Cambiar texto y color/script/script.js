let parrafos = document.getElementsByTagName("p");
let divs = document.getElementsByTagName("div");

function clickme() {
    let parrafos = document.getElementsByTagName("p");
    for (i=0; i<parrafos.length; i++)
        {
            parrafos[i].style.color="red";
            parrafos[i].innerHTML="ROJO";
        }

    let divs = document.getElementsByTagName("div");
    for (a=0; a<divs.length; a++)
            {
                divs[a].style.color="green";
                divs[a].innerHTML="VERDE";
            }
}