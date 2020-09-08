
var cartLabel;
var menuSection;

window.onload = function(){
    this.menuSection = this.document.getElementById('menu-section').innerHTML;
    this.console.log(menuSection);
    cartLabel = document.getElementById('cartButton');
    this.getMenu(this.menuSection);
    // cartLabel.innerHTML = this.cart.length
    this.cartButton = document.getElementById('cartButton')
    this.cartButton.addEventListener('click', (cart)=>{
        console.log('print cart from render')
        console.log(this.cart)
        // this.cartButtonPressed()
        this.renderCart(this.cart)
    })
    
}

var cart = []

function buy(id, name, model, price, image) {
    console.log("i buy")
    console.log(id)
    cart.push(id)
    cartLabel.innerHTML = "Корзина (" + cart.length +")";
    cleanPage();
    loadBuyWindow(id, name, model, price, image);
}





function getMenu(menuSectionVal){
    console.log(menuSectionVal)
    switch (menuSectionVal) {
        case 'Выпечка':
            menuSectionVal = 'bakery'
            break;
        case 'Кофе':
                menuSectionVal = 'coffee'
                break;
    
        default:
            break;
    }
    fetch(`store/${menuSectionVal}.json`).then(res => {
        if(res.ok){
            console.log('i get menu');
            return res.json();
        }
        else{
            console.log('er get rooms :(');
            throw new Error ('er');
        }
    }).then(json=>{
        console.log('almost success');
        var cofffeMenu = json.coffee;
        renderMenu(cofffeMenu);
        
    })//.then(json=> usersRoom //наполняем массив инфой с json)

}

function cartButtonPressed(id, name, model, price, image) {
    var productToPush = {}
    productToPush.id = id;
    productToPush.name = name;
    productToPush.model = model;
    productToPush.price = price;
    productToPush.image = image;
    cart.push(productToPush)
    cartLabel.innerHTML = "Корзина (" + cart.length +")"
    console.log(cart)
}