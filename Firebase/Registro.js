var db = firebase.firestore();
//Agregar datos y validar espacios vacios
function storeData(){
    var sucursal= document.getElementById('region').value;
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var tele= document.getElementById('tel').value;
    var edad= document.getElementById('edad').value;
    var email= document.getElementById('exampleInputEmail').value;
    if(fname.value =="" || lname.value==="" || region.value==="" || tel.value==="" || edad.value==="" || exampleInputEmail.value===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(fname.lenght>30){
        alert("El nombre es muy largo");
        return false;
    }
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
}