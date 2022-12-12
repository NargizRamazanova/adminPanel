let ContactName = document.querySelector("#ContactName")
let ContactTitle = document.querySelector("#ContactTitle")
let Country = document.querySelector("#Country")
let updateBtn = document.querySelector("#updateBtn")

const url = new URL(window.location.href)

const params = url.searchParams;
const id = params.get("id");

console.log(params);
console.log(id);

axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
.then(res=> {
    ContactName.value = res.data.contactName
    ContactTitle.value = res.data.contactTitle
    Country.value = res.data.address?.country

    updateBtn.addEventListener("click", function(){
        axios.put(`https://northwind.vercel.app/api/suppliers/${id}`, {
            contactName: ContactName.value,
            contactTitle: ContactTitle.value,
            address: {
                country:  Country.value
            }
        }).then(res => {
            if(res.status == 200){
                alert("Data updated!")
                setTimeout(()=> {
                    window.location="../index.html"
                },1000)
            }else{
                alert("Something went wrong, try again!")
            }
        })
    })

})

