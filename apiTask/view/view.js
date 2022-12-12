const url = new URL(window.location.href)
const params = url.searchParams;
const id = params.get("id");

axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then(res=> {
        if(res.status == 200){
            let idLi= document.querySelector(".id")
            let contactNameLi = document.querySelector(".contactName")
            let contactTitleLi = document.querySelector(".contactTitle")
            let countryLi = document.querySelector(".country")
            let cityLi = document.querySelector(".city")

            idLi.innerText = res.data.id ?? "No id"
            contactNameLi.innerText = res.data.contactName ?? "No contact name"
            contactTitleLi.innerText = res.data.contactTitle ?? "No contact title"
            countryLi.innerText = res.data.address?.country ?? "No country"
            cityLi.innerText = res.data.address?.city ?? "No city"
        }else{
            let card = document.querySelector(".card")
            card.innerText = "No supplier found"
            card.style.color = "red"
        }
    })
    .catch((err)=> {
        let card = document.querySelector(".card")
            card.innerText = "No supplier found"
            card.style.color = "red"
    })




  //  https://northwind.vercel.app/api/products 
  //  api-dan data-ni çək, table-a geyindir
  // (name, unitPrice, unitsInStock,quantityPerUnit)
  // table-a sort by unitPrice və name görə
  // search by name yazın


  axios.get("https://northwind.vercel.app/api/products")
    .then(res => {
        let newArr;

        newArr = res.data

        console.log(newArr.sort((a, b)=> a.name.localeCompare(b.name)))
    })