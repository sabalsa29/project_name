alert("El documento js esta enlazado")
function entrar(){
    
var done=0;
var usuario=document.usuario.value;
var password=document.password.value;

if (usuario=="sabalsa" && password=="1234") { 
    window.location="TU_PAGINA_WEB.HTML";
    alert("Este es un mensaje de alerta para sabalsa");
    }
}
