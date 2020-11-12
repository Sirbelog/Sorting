"use strict"


//-----------Список товара.


const PRODUCTS = [
	{
		id : '001',
		title : "лошадь",
		image :  "img/1.png",
		price : '600',
		rating : 7
	},
	{
		id : '002',
		title : "кабал",
		image :  "img/2.jpg",
		price : '400',
		rating : 4
	},
	{
		id : '003',
		title : "Вейдер",
		image :  "img/3.jpg",
		price : '250',
		rating : 6
	},
	{
		id : '004',
		title : "человек",
		image :  "img/4.jpg",
		price : '200',
		rating : 5
	},
	{
		id : '005',
		title : "петух",
		image :  "img/5.jpg",
		price : '650',
		rating : 2
	},
	{
		id : '006',
		title : "тоби",
		image :  "img/6.jpg",
		price : '250',
		rating : 2
	},
	{
		id : '007',
		title : "гном",
		image :  "img/7.jpg",
		price : '550',
		rating : 4
	},
	{
		id : '008',
		title : "маска",
		image :  "img/8.png",
		price : '300',
		rating : 3
	},
	{
		id : '009',
		title : "художник",
		image :  "img/9.jpg",
		price : '350',
		rating : 2
	},
	{
		id : '010',
		title : "кот",
		image :  "img/10.png",
		price : '700',
		rating : 7
	},


];


//------------Добавление товаров на страницу.


let prooductsList = document.querySelector(".products")


 let addProducts = function(){
	prooductsList.innerHTML = "";

 	PRODUCTS.forEach(elem =>{
	prooductsList.innerHTML += 
	`
	<div class = 'product'>
	<h3>Маска '${elem.title}'</h3>
	<img src = ${elem.image}>
	<p class = "pricetext"><span>${elem.price}</span> рублей</p>
	<p>${elem.rating} ⭐</p>
	<button class = 'cart'>Добавить в корзину</button>
	</div>
	`;

});


};

addProducts();



//------------Сортировка.


let minPrice = document.querySelector("#minprice")
let maxPrice = document.querySelector("#maxprice")
let rating = document.querySelector("#rating")



minPrice.addEventListener("click",function(){
	PRODUCTS.sort((a, b) => {
		if(a.price<b.price){
					 return a.price - b.price;
		 }}
	);
	
	addProducts();
	cartButtonSort();

});


maxPrice.addEventListener("click",function(){
	PRODUCTS.sort((a, b) => {
		if(a.price>b.price){
					 return b.price - a.price;
		 }}
	);
	
	addProducts();
	cartButtonSort();
});


rating.addEventListener("click",function(){
	PRODUCTS.sort((a, b) => {
		if(a.rating>b.rating){
					 return b.rating - a.rating;
		 }}
	);
	
	addProducts();
	cartButtonSort();
});



//---------Корзина.


let cartProducts = document.querySelector("#cart")
let cartSum = document.querySelector("#cartsum")
let cartList = document.querySelector(".cart-list")



let cartButtonSort = () => {

let cartButton = document.querySelectorAll('.cart')	

let sum = "";
let innerCart;

if(localStorage.getItem('products') == null){     // Проверка наличия товара в localstorage
	innerCart = []; 
}else{
	innerCart = JSON.parse(localStorage.getItem('products'))
}



for(let i = 0; i < cartButton.length; i++){
	
cartButton[i].addEventListener("click",()=>{					

	if (cartButton[i].innerHTML == "Удалить из корзины"){
		cartButton[i].style.backgroundColor = "Green"
		cartButton[i].innerHTML = "Добавить в корзину"
		sum--;
		cartSum.innerHTML = " " +sum;


	if(sum == 0){cartSum.innerHTML = "";};
							
	}else	
	
		{
		sum ++;
		cartSum.innerHTML = " " +sum;

			

		innerCart.push(PRODUCTS[i])
		
		localStorage.setItem('products' , JSON.stringify(innerCart)) // Добавление товара в local storage
		
		console.log(innerCart)

	}
	
});

};

};
cartButtonSort();





























//сортировка пузырьком

// let a = [1,5,14,3,44,7];

// for(let i = 0; i < a.length; i++){
// 	for(let j = i; j <a.length; j++){
// 		if(a[i] >a[j]){
// 			let sum = a[i];
// 			a[i] = a[j];
// 			a[j] = sum;
// 		}
// 		console.log(a)
// 	}
// }
