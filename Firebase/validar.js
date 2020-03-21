var db = firebase.firestore();
var formulario= document.getElementById("formulario")
window.onload=iniciar;
function iniciar(){
    document.getElementById("registrarse").addEventListener('click',enviar,false);
}
function validacion(){
    if(sucursal ==="" || fname ==="" || lname==="" || tel==="" || exampleInputEmail==="" || edad===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    return true;
}
function validatele(){
    var tele= document.getElementById('tel').value;
    if(isNaN(tele.value)){
        alert("El campo telefono tiene que ser numerico");
        return false;
    }
    return true;
}
function validaedad(){
    var edad= document.getElementById('edad').value;
    if(isNaN(edad.value)){
        alert("El campo telefono tiene que ser numerico");
        return false;
    }
    return true;
}
function enviar(e){
    if(validacion() && validatele() && validaedad() && confirm("Pulsa aceptar si desea enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
    }
}
function storeData(){
    var sucursal= document.getElementById('region').value;
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var email= document.getElementById('exampleInputEmail').value;
    db.collection("Nombre").add({
        email: email,
        lname: lname,
        fname: fname,
        edad: edad,
        phone: tele,
        sucursal: sucursal
    })   
        .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('fname').value='';
        document.getElementById('lname').value='';
        document.getElementById('tel').value='';
        document.getElementById('exampleInputEmail').value='';
        document.getElementById('edad').value='';
    })
        .catch(function(error) {
        console.error("Error adding document: ", error);
    })
    function validar(e){
        if(confirm("Pulsa aceptar si deseas enviar la informacion del cliente")){
            return true;
        }
        else
        {
            e.preventDefault()
            return false;
        }
    }
}