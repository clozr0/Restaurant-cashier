let foodItems = {
  mainMeal: [
    { name: 'Chickens', price: 10, image: 'images/chicken.jpg' },
    { name: 'Pasta', price: 8, image: 'images/pasta.jpg' },
    { name: 'Kebab', price: 12, image: 'images/kebab.jpg' }
  ],
  appetizers: [
    { name: 'Authority', price: 5, image: 'images/authority.jpg' },
    { name: 'Diet salad', price: 6, image: 'images/salad.jpg' }
  ],
  drinks: [
    { name: 'Coffee', price: 3, image: 'images/coffee.jpg' },
    { name: 'Tea', price: 2, image: 'images/tea.jpg' },
    { name: 'Orange juice', price: 4, image: 'images/orange_juice.jpg' },
    { name: 'Peach juice', price: 4, image: 'images/peach_juice.jpg' },
    { name: 'Cold tea', price: 3, image: 'images/cold_tea.jpg' },
    { name: 'Energy drink', price: 5, image: 'images/energy_drink.jpg' }
  ]
};

const foodItemsElement = document.querySelector('.food-items');
const cartElement = document.querySelector('#cart');

function showFoodItems(category) {
  const items = foodItems[category];
  foodItemsElement.innerHTML = '';

  items.forEach(item => {
    const foodItemElement = document.createElement('div');
    foodItemElement.classList.add('food-item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    foodItemElement.appendChild(img);

    const name = document.createElement('p');
    name.textContent = item.name;
    foodItemElement.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;
    foodItemElement.appendChild(price);

    foodItemElement.onclick = function() {
      addToCart(item);
    };

    foodItemsElement.appendChild(foodItemElement);
  });
}

function addToCart(item) {
  const existingCartItem = document.querySelector(`.cart-item[data-item="${item.name}"]`);
  
  if (existingCartItem) {
    const quantityInput = existingCartItem.querySelector('input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  } else {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.dataset.item = item.name;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    cartItemElement.appendChild(img);

    const h4 = document.createElement('h4');
    h4.textContent = item.name;
    cartItemElement.appendChild(h4);

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;
    cartItemElement.appendChild(price);

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
