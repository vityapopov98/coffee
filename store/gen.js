function renderMenu(coffeeMenu){
    // var innerComponent = '<div id="menu">'
    var coffeePlace = document.querySelector('.coffee');
    console.log('kitchen');
    // place.insertAdjacentHTML('beforeend', openCardDeck);
    coffeeMenu.forEach(element => {
        console.log(element)
        // innerComponent += coffeeComponent(element.id, element.name, element.model, element.price);
        coffeePlace.insertAdjacentHTML('beforeend', coffeeComponent(element.id, element.name, element.model, element.price, element.image))
    });
//    coffeePlace.insertAdjacentHTML('beforeend', innerComponent + "</div>")
}

function cleanPage() {
    var header = document.getElementById('header');
    var content = document.getElementById('menu');
    header.remove();
    content.remove();
}

function loadBuyWindow(productID, name, model, price, image) {
    
    var place = document.getElementById('app');
    const buyWindowComponent = `<section id="buy">
    <div class="container">
        <form class="buyWindow">
          <div class="media-body">
            <h4>Купить</h4>
          </div>
          <hr>

          <div class="media">
          <img src="store/images/${image}" class="mr-3 smallImg" alt="...">
          <div class="media-body">
            <h5 class="mt-0">${name}</h5>
            ${model + " " + price}
          </div>
          </div>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Имя">
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Телефон">
              </div>
            </div>
            <div class="py-2">

              <input type="text" class="form-control" placeholder="Адрес">
            </div>
            <button type="button" class="btn btn-secondary" onclick="cancel('${menuSection}')">Отменить</button>
            <button type="submit" class="btn myBtn" onclick="cancel()">Купить</button>
          </form>
    </div>
  </section>`

  place.insertAdjacentHTML('beforeend', buyWindowComponent);
}

function cancel(menuSection) {
    
    var content = document.getElementById('buy');
    content.remove();

    var place = document.getElementById('app');
    var menuSectionBg = ''
    if (menuSection == 'Выпечка') {
      menuSectionBg = '../img/pablo-merchan-montes-0nT08Z-MhiE-unsplash.jpg';
    }
    else if(menuSection == 'Кофе'){
      menuSectionBg = '../img/takahiro-sakamoto-shtslUvi64Y-unsplash.jpg';
    }
    const startPage = `
    <section id="header">
    <div class="banner-img-container">
      <img src="${menuSectionBg}" alt="">
    </div>
    <div class="banner store-banner">
      <div class="overlay-left-store">
          <div class="container">
              <h1 id="menu-section">${menuSection}</h1>
              <p>Успей заказать до 10:00<br> и получи скидку 20%.</p>
              <a href="#" class="gold-button">Заказать</a>
          </div>
      </div>
    </div>
  </section>

<section id="menu">
  <div class="container">
    
    <div class="row py-5">
      <div class="coffee">
      
      </div>
      </div>
    </div>
  </section>`

    place.insertAdjacentHTML('beforeend', startPage);
    getMenu(`${menuSection}`);
}
const kapuchino =`<div class="col-md-4">
<div class="card mb-4 box-shadow">
  <img class="card-img-top" src="images/coffee-png-1.png" alt="Card image cap">
  <div class="card-body">
      <h5 class="card-title">Капучино</h5>
    <p class="card-text">150 p</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class=" myBtn btn btn-sm btn-outline-secondary" >Купить</button>
      </div>
      <small class="text-muted">200 ml</small>
    </div>
  </div>
</div>
</div>`


function coffeeComponent(id, name, model, price, image){
    const coffee = `<div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="store/images/${image}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${name}</h5>
        <p class="card-text">${price}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <button type="button" class="cartBtn btn btn-sm btn-outline-secondary mx-1" onclick="cartButtonPressed(${id}, '${name}', '${model}', '${price}', '${image}')">В корзину</button>
            <button type="button" class=" myBtn btn btn-sm btn-outline-secondary" onclick="buy(${id}, '${name}', '${model}', '${price}', '${image}')">Купить</button>
            </div>
          <small class="text-muted">${model}</small>
        </div>
      </div>
    </div>
    </div>`

    return coffee
}


function renderCart(cart) {
  console.log('rendering cart')
  cleanPage();
  var place = document.getElementById('app');
  var cartCode = `<section id="buy">
  <div class="container">
      <form class="buyWindow" action="/makeOrderFromCart" method="post">
        <div class="media-body">
          <h4>Купить</h4>
        </div>
        <hr>
`
  cart.forEach(element => {
    console.log(element)
    cartCode += cartItemComponent(element.id, element.name, element.model, element.price, element.image)
    // place.insertAdjacentHTML('beforeend', cartItemComponent(element.name, element.model, element.price, element.productID))
  });

  cartCode += `<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Имя" name="fio">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Телефон" name="phone">
  </div>
</div>
<div class="py-2">

  <input type="text" class="form-control" placeholder="Адрес" name="address">
</div>

<button type="button" class="btn btn-secondary" onclick="cancel('${menuSection}')">Отменить</button>
<input type="submit" class="myBtn inputBtn mx-1" value="Заказать">
</form>
</div>
</section>`

place.insertAdjacentHTML('beforeend',cartCode);
  
}

function cartItemComponent(id, name, model, price, image) {
  
  const cartComponent = `
        <div class="media">
        <img src="${image}" class="mr-3 smallImg" alt="...">
        <div class="media-body">
          
          <input class="inputBuyHeader" name="name" value="${name}" readonly>
          <input class="inputBuy" name="model" value="${model}" readonly>
          <input class="inputBuy" name="price" value="${price}" readonly>
          <input style="display: none" name="productID" value="${id}" readonly>
        </div>
        </div>`
        return cartComponent;
}