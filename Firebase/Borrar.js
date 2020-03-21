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
<td><button class="btn btn-danger" onclick="inhabilitar('${doc.id}','${doc.data().fname}','${doc.data().lname}','${doc.data().edad}','${doc.data().email}','${doc.data().phone}','${doc.data().sucursal}')">Inhabilitar</td>
</tr>

`
    });
});

//Inhabilitar documentos
function inhabilitar(id,fname,lname,edad,email,phone,sucursal){
    db.collection("users").add({
        email: email,
        lname: lname,
        fname: fname,
        edad: edad,
        phone: phone,
        sucursal: sucursal
    })
    db.collection("Nombre").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}