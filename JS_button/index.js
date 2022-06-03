
window.addEventListener('DOMContentLoaded', function(e){
    var maxnumber = document.getElementById("maxdiv");

    // maxnumber.addEventListener("onchange",(e)=>{

    // })
    var boton = document.getElementById("boton");
    var contentcontainer = document.getElementsByClassName("content-container")[0];
    for(let i = 0; i < 10; i++){
        var element =  document.createElement('div');
        element.className = "content-container";
        // element.innerHTML = contentcontainer.innerHTML;
        element.innerHTML = `<div class="center-content"><input id="input_${i}" type="text" class="input" placeholder="Un campo de texto"><button class="button" id="boton_${i}">Boton</button></div>`
        // element.getElementById('input').id = i;
        document.body.appendChild(element);
    }

    for(let i = 0; i < 10; i++)
    {
        var nuevoBoton = document.getElementById(`boton_${i}`);
        nuevoBoton.addEventListener("click",(e)=>{
            var inputValue = document.getElementById(`input_${i}`).value;
            alert(inputValue);
        })
    }

    boton.addEventListener("click",(e)=>{
        // e.preventDefault();
        var inputValue = document.getElementById("input").value;
        alert(inputValue);
    })
})
