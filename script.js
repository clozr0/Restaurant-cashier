let foodItems = {
    mainMeal: ['Chickens', 'Pasta', 'Kebab'],
    appetizers: ['Authority', 'Diet salad'],
    drinks: ['Coffee', 'Tea', 'Orange juice' ,'Peach juice' ,'Cold tea' ,'Energy drink']
  };
  
  const foodItemsElement = document.querySelector('.food-items');
const cartElement = document.querySelector('#cart');

function showFoodItems(category) {
  const items = foodItems[category];
  foodItemsElement.innerHTML = '';

  items.forEach(item => {
    const foodItemElement = document.createElement('button');
    foodItemElement.classList.add('food-item');
    foodItemElement.textContent = item;
    foodItemElement.onclick = function() {
      addToCart(item);
    };
    foodItemsElement.appendChild(foodItemElement);
  });
}

function addToCart(item) {
  const existingCartItem = document.querySelector(`.cart-item[data-item="${item}"]`);
  
  if (existingCartItem) {
    const quantityInput = existingCartItem.querySelector('input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  } else {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.dataset.item = item;

    const img = document.createElement('img');
    img.src = 'image/h.png';
    img.alt = 'food';
    cartItemElement.appendChild(img);

    const h4 = document.createElement('h4');
    h4.textContent = item;
    cartItemElement.appendChild(h4);

    const quantityInput = document.createElement('input');
    quantityInput.type = 'text';
    quantityInput.value = 1;
    cartItemElement.appendChild(quantityInput);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function (){
      cartItemElement.remove();
    };
    cartItemElement.appendChild(deleteButton);

    cartElement.appendChild(cartItemElement);
  }
}