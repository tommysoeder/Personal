


document.addEventListener('DOMContentLoaded', function () {
    
    const boton = document.getElementById('boton');
    const cara=document.getElementById("cara");
    const flecha=document.getElementById("flecha");
    // const altavoz=document.getElementById("altavoz");
    const botonRojo=document.getElementById("ultimo-boton");
    const myAudio = document.getElementById('audio');

    const instrucciones = document.querySelector('.instrucciones');
    const containerActual = document.querySelector('.container');
    const segundoContainer = document.querySelector('.segundo-container');
    const tercerContainer = document.querySelector('.tercer-container');
    const cuartoContainer = document.querySelector('.cuarto-container'); 
    const quintoContainer = document.querySelector('.quinto-container');
    const sextoContainer = document.querySelector('.sexto-container');
    const septimoContainer = document.querySelector('.septimo-container');
    
    boton.addEventListener('click', handleClick);

    function handleClick() {
        
        containerActual.style.display = 'none';

        instrucciones.style.display = 'none';

        segundoContainer.style.display = 'block';

        setTimeout(() => {

            segundoContainer.style.display = 'none';
            tercerContainer.style.display = 'block';

            setTimeout(() => {

                tercerContainer.style.display = 'none';
                cuartoContainer.style.display = 'block';
               
            }, 1000); 

      }, 5000);  

    }

    cara.addEventListener('click', handleSecondClick);

    function handleSecondClick() {

        cuartoContainer.style.display = 'none';

        quintoContainer.style.display = 'block';

    }

    flecha.addEventListener('click', handleThirdClick);

    function handleThirdClick() {
        
        quintoContainer.style.display = 'none';

        // altavoz.style.display = 'none';

        sextoContainer.style.display = 'block';
    }

    botonRojo.addEventListener('click', handleFourthClick);

    function handleFourthClick() {

        sextoContainer.style.display = 'none';

        septimoContainer.style.display = 'block';
    }
});
