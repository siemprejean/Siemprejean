var db = firebase.firestore();
//Ver la tabla documentos
var tablon=document.getElementById('tablon');
db.collection("Nombre").onSnapshot((querySnapshot) => {
    tablon.innerHTML= '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().sucursal}`);
        tablon.innerHTML+= `
<tr>
<th scope="row">${doc.id}</th>
<td>${doc.data().fname}</td>
<td>${doc.data().lname}</td>
<td>${doc.data().edad}</td>
<td>${doc.data().email}</td>
<td>${doc.data().phone}</td>
<td>${doc.data().sucursal}</td>
<td><button class="btn btn-info" onclick="editar('${doc.id}','${doc.data().fname}','${doc.data().lname}','${doc.data().edad}','${doc.data().email}','${doc.data().phone}','${doc.data().sucursal}')">Editar</td>
</tr>

`
    });
});

//Editar documentos

function editar(id,fname,lname,edad,email,telefono,sucursal){
    document.getElementById('fname').value=fname;
    document.getElementById('lname').value=lname;
    document.getElementById('edad').value=edad;
    document.getElementById('exampleInputEmail').value=email;
    document.getElementById('tel').value=telefono;
    document.getElementById('region').value=sucursal;

    var registrarse=document.getElementById('buton');
    registrarse.innerHTML='Editar';

    registrarse.onclick = function(){
        var washingtonRef = db.collection("Nombre").doc(id);
        var fname= document.getElementById('fname').value;
        var lname= document.getElementById('lname').value;
        var tele= document.getElementById('tel').value;
        var edad= document.getElementById('edad').value;
        var email= document.getElementById('exampleInputEmail').value;
        var sucursal= document.getElementById('region').value;
        return washingtonRef.update({
            sucursal: sucursal,
            fname: fname,
            lname: lname,
            phone: tele,
            edad: edad,
            email: email
        })
            .then(function() {
            console.log("Document successfully updated!");
            registrarse.innerHTML ='Guardar';
        })
            .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}