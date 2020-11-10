"use strict"


let productsCart = document.querySelector(".products-cart")


let list = JSON.parse(localStorage.getItem('products'))

	
list.forEach(elem =>{
	productsCart.innerHTML += 
	`
	<div class = 'products-cart__elements'>
	<h3>Маска '${elem.title}'</h3>
	<img src = ${elem.image}>
	<p class = "pricetext"><span>${elem.price}</span> рублей</p>
	<p>${elem.rating} ⭐</p>
	<button class = 'delete__cart'>Удалить</button>
	</div>
	`;})