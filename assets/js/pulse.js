const qutu = document.getElementById('card')

let limit = 3;
let page = 1;


async function getProducts() {
    const response = await axios.get(`https://65685e799927836bd974a707.mockapi.io/products?limit=${limit}&page=${page}`)
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
        <button class = "btnCard" onclick = "addToCard(${item.id})">SEPETE EKLE</button>
        <button class = "btnWishlist" onclick = "addToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
        </div>
        
        `
        qutu.appendChild(box)
    })
page++
}
document.getElementById('load').addEventListener('click', getProducts)

function addToCard(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id));
    localStorage.setItem('cart' ,JSON.stringify(cart))
}
function addToWishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.push(db.find(item => item.id == id));
    localStorage.setItem('wishlist' ,JSON.stringify(wishlist))
}
getProducts()



const max = document.getElementById('max')
const min = document.getElementById('min')

function maxFunc() {
    qutu.innerHTML = ''
    axios.get('https://65685e799927836bd974a707.mockapi.io/products')
        .then(res => {
            db = res.data
            let sortData = db.sort((a, b) => (a.title.localeCompare(b.title)))
            console.log(sortData);
            sortData.map(item => {
                const box = document.createElement("div");
                box.className = "cardList ";
                box.innerHTML = `
    
                <img src="${item.image}" alt="photo">
        <h1>$ ${item.price}</h1>
        <p>${item.title}</p>
        <div class = "jsBtn">
        <button class="btnCard" onclick ="addToCart(${item.id})">sepete ekle</button>
        </div>
            
        `;
                qutu.appendChild(box);
            })
        })
}

max.addEventListener('click', maxFunc)



function minFunc() {
    qutu.innerHTML = ''
    axios.get('https://65685e799927836bd974a707.mockapi.io/products')
        .then(res => {
            db = res.data
            let sortData = db.sort((a, b) => (b.title.localeCompare(a.title)))
            console.log(sortData);
            sortData.map(item => {
                const box = document.createElement("div");
                box.className = "cardList ";
                box.innerHTML = `
                <img src="${item.image}" alt="photo">
                <h1>$ ${item.price}</h1>
                <p>${item.title}</p>
                <div class = "jsBtn">
                <button class="btnCard" onclick ="addToCart(${item.id})">sepete ekle</button>
                </div>
       
        
        `;
                qutu.appendChild(box);
            })
        })
}

min.addEventListener('click', minFunc)

