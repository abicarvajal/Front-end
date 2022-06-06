window.addEventListener('DOMContentLoaded', function(event){
    var form_register =  document.querySelector('#form-register');
    form_register.addEventListener('submit', function(event){
        var canSubmit = true;

        //validación del nombre
        var input_name = document.querySelector('#input_name');
        if(input_name.value==""){
            document.querySelector('#name_container .input-error').innerHTML = 'El nombre es obligatorio';
            canSubmit = false;
        }else{
            if(input_name.value.length < 3){
                document.querySelector('#name_container .input-error').innerHTML = 'El nombre debe tener al menos 3 dígitos';
                canSubmit = false;
            }else{
                document.querySelector('#name_container .input-error').innerHTML = '';
            }
        }
        //validacion apellido
        var input_name = document.querySelector('#input_lastname');
        if(input_name.value==""){
            document.querySelector('#lastname_container .input-error').innerHTML = 'El apellido es obligatorio';
            canSubmit = false;
        }else{
            if(input_name.value.length < 3){
                document.querySelector('#lastname_container .input-error').innerHTML = 'El apellido debe tener al menos 3 dígitos';
                canSubmit = false;
            }else{
                document.querySelector('#lastname_container .input-error').innerHTML = '';
            }
        }
        //validación ci
        var input_ci = document.querySelector("#input_ci");
        if(input_ci.value==""){
            document.querySelector('#ci_container .input-error').innerHTML = 'La cédula es obligatoria';
            canSubmit = false;
        }else{
            if(input_ci.value.length != 10){
                document.querySelector('#ci_container .input-error').innerHTML = 'La cédula ingresada no tiene 10 dìgitos';
                canSubmit = false;
            }
            else if(!verifyIsNumber(input_ci.value)){
                document.querySelector('#ci_container .input-error').innerHTML = 'La cédula debe contener solo dìgitos';
                canSubmit = false;
            }
            else{
                document.querySelector('#ci_container .input-error').innerHTML = '';
            }
        }
        //validacion email
        var input_email = document.querySelector('#input_email');
        if(input_email.value==""){
            document.querySelector('#email_container .input-error').innerHTML = 'El correo es obligatorio';
            canSubmit = false;
        }else{
            var indexOne = input_email.value.indexOf("@");
            var indexTwo = input_email.value.indexOf(".");
            console.log(indexOne);
            console.log(indexTwo);
            if(indexOne < 0 || indexTwo < 0){
                document.querySelector('#email_container .input-error').innerHTML = 'El correo no contiene la estructura requerida';
                canSubmit = false;
            }else if(indexTwo < indexOne){
                document.querySelector('#email_container .input-error').innerHTML = 'El correo no contiene la estructura';
                canSubmit = false;
            }
            else{
                document.querySelector('#email_container .input-error').innerHTML = '';
            }
        }
        if(!canSubmit){
            event.preventDefault();
        }

    })

})

function verifyIsNumber(ci){
    var verify = true;
    for(let i=0; i < ci.length; i++){
        const charValue = ci.charCodeAt(i);
        if(charValue < 48 || charValue > 57){
            verify = false
        }
    }
    console.log(verify);
    return verify;
}
//Abigail Carvajal