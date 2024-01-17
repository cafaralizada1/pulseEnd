const inp = document.getElementById('inp')
const btn = document.getElementById('searchBtn')
const searchDiv = document.getElementById('card')

function getSearch(){
    searchDiv.innerHTML = ""
    axios.get("https://65685e799927836bd974a707.mockapi.io/products")
    .then(response => {
        db = response.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item => {
            const box = document.createElement('div')
            box.className = "cardList"
            box.innerHTML = `
            <img src="${item.image}" alt="photo">
            <h1>${item.title}</h1>
            <p>$ ${item.price}</p>
            <div class = "btnJs">
        <button class = "btnCard" onclick = "sil(${item.id})">sil</button>
        <button class = "btnWishlist" onclick = "addToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
        </div>
                `
                searchDiv.appendChild(box)
        })
    })
}
btn.addEventListener('click',getSearch)

const form = document.getElementById('form')
const emaill = document.getElementById('email')
const passwordd = document.getElementById('password')

form.addEventListener('submit', function(e){
    e.preventDefault()

    axios.post(`https://65685e799927836bd974a707.mockapi.io/products`, {
        title: passwordd.value,
        price: emaill.value
    })

    getProducts()
})



const qutu = document.getElementById('card')




async function getProducts() {
    qutu.innerHTML = ""
    const response = await axios.get(`https://65685e799927836bd974a707.mockapi.io/products`)
    const data = await response.data
    db = data

    db.map(item => {
        const box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML = `
        <img src="${item.image}" alt="photo">
        =<p>${item.title}</p>
        <h1>$ ${item.price}</h1>
        
        <div class = "btnJs">
        <button class = "btnCard" onclick = "sil(${item.id})">sil</button>
        <button class = "btnWishlist" onclick = "addToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
        </div>
        
        `
        qutu.appendChild(box)
    })
}
function sil(id){
    axios.delete(`https://65685e799927836bd974a707.mockapi.io/products/${id}`)
    getProducts()
}
getProducts()