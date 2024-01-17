const qutu = document.getElementById('card')

function getProducts (){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    qutu.innerHTML = ""
    cart.map((item,index) => {
        const box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML = `
        <img src="${item.image}" alt="photo">
        <h1>$ ${item.price}</h1>
        <p>${item.title}</p>
        <div class = "btnJs">
        <button class = "btnCard" onclick = "removeItem(${index})">SIL</button>
        </div>
        `
        qutu.appendChild(box)
    })
}


function removeItem(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index,1)
    localStorage.setItem('cart' ,JSON.stringify(cart))
    getProducts()
}
getProducts()