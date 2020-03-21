var db = firebase.firestore();
//leer documentos
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
`
    });
});