let shop = document.getElementById('shop');



let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML= shopItemData.map((x) =>{
        let {id, name, price, desc, img} = x;
        let search = basket.find((x)=>x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
      <img width="220" src="${img}" alt="">
      <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="button">
                  <i onclick="decrement(${id})" class="bi bi-dash"></i>
                  <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                  </div>
                  <i onclick="increment(${id})" class="bi bi-plus"></i>
              </div>
          </div>
      </div>
  </div>
      `  
    }).join(""));
};
generateShop();



// ! increment function


let increment = (id) =>{
    let selectedItem = id;

    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    } 
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};



// ! Decrement function 



let decrement = (id) =>{
    let selectedItem = id;

    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;

    else if (search.item === 0) return ;
    else {
        search.item -= 1;
    } 
    basket = basket.filter((x)=>x.item !== 0)

    // console.log(basket);
    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket));


}

// ! update function


let update = (id) =>{

    let search = basket.find((x)=> x.id === id)
    console.log(search.item);

    document.getElementById(id).innerHTML = search.item;
    calculation();
}

// ! Calculation of the cart .   
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x+y,0)
}

calculation();