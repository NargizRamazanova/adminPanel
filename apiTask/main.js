let tbody = document.querySelector("tbody")
let suppliers = [];

axios.get("https://northwind.vercel.app/api/suppliers")
.then(res => {
    res.data.forEach(element => {
        tbody.innerHTML += `
            <tr style="border:1px solid">
                <td>${element.id}</td>
                <td>${element.contactName}</td>
                <td>${element.contactTitle}</td>
                <td>${element.address?.country}</td>
                <td>
                <a href="./view/view.html?id=${element.id}"><i class="fa-solid fa-eye text-white bg-primary "></i></a>
                <a href="./update/update.html?id=${element.id}" ><i class="fa-solid fa-wrench text-white bg-primary"></i></a>
                <i supplierId="${element.id}" class="fa-solid fa-trash text-white bg-primary"></i>
                </td>
            </tr>
        `
        const obj = {
            id:element.id,
            contactName:element.contactName,
            contactTitle:element.contactTitle,
            address:{
                country:element.address?.country
            }
        }
        suppliers.push(obj)
        localStorage.setItem("MYDATAS",JSON.stringify(suppliers))


        let deletebtns = document.querySelectorAll(".fa-trash")

        deletebtns.forEach(btn => btn.addEventListener("click", function(){
            let id = this.getAttribute("supplierId")
            axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
                .then(res => {
                    if(res.status == 200){
                        this.parentElement.parentElement.remove()
                        alert("Deleted successfully!")
                    }else{
                        alert("Something went wrong! Please, try again!")
                    }
                })
                .catch((err)=> console.log(err))
        }))

    });



})
.catch(error => {
    console.log(error);
})
   
let myUpdateBtn
