let change;
let product_data = JSON.parse(localStorage.getItem("Product"));
console.log(product_data);
let data = document.getElementById('data');

let main = document.createElement('div');
main.setAttribute("class", "imgDiv");

let div = document.createElement('div');
div.setAttribute('class', 'div');

let img = document.createElement('img');
img.src = product_data.img;

let name = document.createElement('p');
name.textContent = product_data.name;

let p = document.createElement('div');
p.setAttribute('class', 'p');

let price = document.createElement('b');
price.textContent =     "$" + product_data.price;


let ship_from = document.createElement('div');
ship_from.setAttribute('class', 'ship_from');
let shi = document.createElement('b')
shi.textContent = "Ships from :"
let shipfrom = document.createElement('h5');
shipfrom.textContent = product_data.shipfrom;


let subtotal= document.createElement('div');
let total = document.createElement('p');
total.setAttribute('class', 'subtotal');

total.textContent = "$" + product_data.price;



let btn_remove = document.createElement('button');
btn_remove.innerHTML = "Delete";



let fav = document.createElement('p');
fav.setAttribute('class', 'fav')
fav.textContent = "Favorite"


//Product Increase Decrease
let input = document.createElement('div');
input.setAttribute('class', "input");

let number = 1;

let num = document.createElement('p');
num.textContent = number;

let minus = document.createElement('p');
minus.textContent = '-';
minus.addEventListener("click", ()=>{


    if(number > 1){
        num.textContent = number-=1;
    }
});

let add = document.createElement('p');
add.textContent = '+';
add.addEventListener("click", ()=>{
    num.textContent = number+=1;
    if(number >1){
        alert("added");
        change = number*product_data.price;
        console.log(change);
        itemAdd(change);
        localStorage.setItem("payment", JSON.stringify(change));

    }
});


let bothbtn = document.createElement('div');
bothbtn.setAttribute('class', 'both');





//appends cart products
main.append(img);
ship_from.append(shi, shipfrom)
div.append(name, ship_from);
p.append(price);
subtotal.append(total);
bothbtn.append(fav, btn_remove);
input.append(minus, num, add)
data.append(main, div, p, input, total,bothbtn);


btn_remove.addEventListener('click', ()=>{
    alert("Delete");
    data.innerHTML = null;
    p.innerHTML = null
  p.innerHTML = "Your Cart is Empty";
  p.style.fontSize = '40px';
  p.style.marginLeft = '480px';
  data.append(p);
})


let proceed = document.getElementById('one');
//proceed items
function itemAdd(change){
    proceed.innerHTML = null;


let div_sub1 = document.createElement('div');


div_sub1.setAttribute("class", "div_sub1")
let div_sub2 = document.createElement('div');
div_sub2.setAttribute("class", "div_sub2")
let div_sub3 = document.createElement('div');
div_sub3.setAttribute("class", "div_sub3")



let div_subtotal = document.createElement('h5');
div_subtotal .innerHTML = `Your subtotal `

let div_subtot = document.createElement('h5');
div_subtot.innerHTML =  `$${change}`

let div_promotion = document.createElement('h5');
div_promotion.textContent = "Promotion " ;

let div_pro= document.createElement('h5');
div_pro.innerHTML =  `- $0.00`;


let div_total = document.createElement('h5');
div_total.innerText = `Total`;


let div_tot = document.createElement('h5');
div_tot.innerText = ` $${change}`

let div_btn = document.createElement('button');
div_btn.textContent = `Please proceed to Checkout `

div_btn.addEventListener("click", ()=>{
    window.location.href = "address.html"
});




div_sub1.append(div_subtotal,div_subtot );
div_sub2.append(div_promotion, div_pro)
div_sub3.append( div_total, div_tot);
proceed.append(div_sub1,div_sub2, div_sub3, div_btn);


}
