/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
document.getElementById("cart").deleteRow(0);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  // TODO: Iterate over the items in the cart
  console.log(cart.items.length);
  for (let i = 0; i < cart.items.length; i++) {
   // TODO: Create a TR
      let trow = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
      let td= document.createElement('td');
      td.textContent = "X";
      td.setAttribute("id", cart.items[i].product);
      trow.appendChild(td);
      //make table data for qauilty 
      let quantitytd = document.createElement('td');
      quantitytd.textContent=cart.items[i].quantity;
      trow.appendChild(quantitytd);
      //make table data for item
      let itemtd= document.createElement('td');
      // console.table(cart.items[i]);
      itemtd.textContent=cart.items[i].product;
      trow.appendChild(itemtd);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
      tbody.appendChild(trow);
  }
 

}

function removeItemFromCart(event) {
console.log("removeItemFromCart");
console.log(event.target);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let item = event.target.id;
  console.log(item);
  cart.removeItem(item);
  // TODO: Save the cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
