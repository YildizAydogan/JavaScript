const data = [
    {id:1, name:"Ayse", puan:80},
    {id:2, name:"Ali", puan:50},
    {id:3, name:"Veli", puan:30},
    {id:4, name:"Fatma", puan:20},
    {id:5, name:"Asli", puan:55}
];


// Data nın tabloya satır olarak eklenmesi
let strRow = "";
for(let item of data){
    strRow += `
        <tr>
            <td>${item.name}</td>
            <td>${item.puan}</td>
            <td><button class="btn btn-danger btn-delete">Sil</button></td>
        </tr>
    `;
}
document.querySelector('#tblPoint tbody').innerHTML = strRow;

// Puanı 50 den küçük olanlar için satır rengini değiştiriyoruz. 
const rows = document.querySelectorAll("#tblPoint tbody tr");
for(let row of rows){
    const puan = row.querySelector("td:nth-child(2)").innerText;
    if(puan<50){
        row.classList.add("table-warning");
    }
}


// butonlara click eventi eklendi
document.querySelectorAll(".btn-delete").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        
        const isim = e.target.closest("tr").querySelector("td:first-child").innerText;
        confirm(`${isim} isimli kaydi silmek istediginizden emin misiniz?`);
    });
})