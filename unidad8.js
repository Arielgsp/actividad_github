const usuario = document.getElementById('username');

const password = document.getElementById("password")


const btn = document.getElementById('submit');

btn.addEventListener('click', () => {
    usuario.setCustomValidity('');
    password.setCustomValidity('');  
    
    if(usuario.value == ""){
        usuario.setCustomValidity("Ingresa un e-mail")
        
        }else if(!usuario.value.includes("@")){
        usuario.setCustomValidity("Debe contener un @")        

        }else if(password.value == ""){
            password.setCustomValidity("Incluye una contraseña") 
        
        }
    }
    
    
    
)

    
    