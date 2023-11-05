console.log("working")

const API ="https://parallelum.com.br/fipe/api/v1/carros/marcas"


const allData = document.querySelector("#datalist")
function ReadAllData(){
    fetch(API, {
        method: "GET",
    })
    .then ((res) => res.json())
    .then ((data) => renderAllData(data))
    .catch ((err) => console.log("Error",err));
}
ReadAllData()

function renderingData(Data){
    const dataDev = document.createElement("div")
    dataDev.className = "card";
    dataDev.innerHTML += `
    <h3>Vehicle Id : ${Data.codigo}</h3>
   <h3>Vehicle:${Data.nome}<h3/>
<button data-id=${Data.codigo} id=del-btn>Delete</button>
`;
allData.append(dataDev)
}


function renderAllData(newdatas){
    newdatas.forEach((newdata) => {
    renderingData(newdata);
    });
}

function deleteData(id, parent){
    fetch(`${API}/${id}`,{
        method:"DELETE",
        headers: {
            "Content-Type":"application/json",
        },  
    })
    then(() => parent.remove())
    .catch((err) => console.log(err));
}

allData.addEventListener("click",(event)=>{
    if(event.target.id === "del-btn"){
        const id = event.target.dataset.id;
        const parent = event.target.parentNode; 
        parent.remove();
    
    }
})