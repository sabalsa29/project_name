//alert("El documento js esta enlazado")

const btn= document.getElementById("click");
btn.addEventListener('click',entrar);

const usuarios= [{user:"arturo",password:"1234"}]

function validar_usuario(usuario, password){
    return usuarios.find((u)=>{
        return u.user===usuario && u.password===password
    })
}
function entrar(){
//alert("Se dio click");
var done=0;
const usuario=document.login.usuario.value;
const password= document.login.password.value;
if(!usuario || !password){
 // TODO:Enviar que el usuario es invalido
     
 return;
}
if(validar_usuario(usuario.toLowerCase().trim(), password)){

     api();
}
}
function api(){
   window.open("index_API.html");
//Sirve?
}
