"use strict"


let productsCart = document.querySelector(".products-cart")


let list = JSON.parse(localStorage.getItem('products'))

if(localStorage.getItem('products') != null)	{
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
}

	let deleteButton = document.querySelectorAll(".delete__cart");
	
	console.log(deleteButton)

	for(let j = 0; j < deleteButton.length; j++){
		
		deleteButton[j].addEventListener('click',()=>{

			list.splice(j,1);
			localStorage.setItem('products', JSON.stringify(list))

			productsCart.children[j].classList.add('none')
			// deleteButton[j].remove()
			console.log(productsCart.children[j])
			console.log(j)
		})
		
		

	}

	let clearCart = document.querySelector("#clearcart").addEventListener('click',()=>{
		productsCart.innerHTML = "";
		localStorage.clear();
	})