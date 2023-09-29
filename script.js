let heading = document.getElementById('header-title');
heading.innerText = "Grocery Store Site";
heading.style.borderBottom ='solid 3px black';
heading.style.fontStyle = 'italic';
heading.style.color = '#D3D3D3';
//GetElementByClassName
let items = document.getElementsByClassName('list-group-item');
items[0].innerText = 'Dry Graphes';
items[1].innerText = 'Cashews'
items[2].innerText = 'Almonds';
items[3].innerText = 'Walnuts';
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor = '#ADD8E6';
    items[i].style.fontWeight = '600';
}
let firstItem = document.querySelector('.list-group-item:nth-child(1)');
firstItem.style.color = 'brown';
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'black';
let thridItem = document.querySelector('.list-group-item:nth-child(3)');
thridItem.style.color = '#B5651d';
let forthItem = document.querySelector('.list-group-item:nth-child(4)');
forthItem.style.color = 'black';

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for(let j=0;j<odd.length;j++){
    odd[j].style.backgroundColor = '#f4f4f4';
    even[j].style.backgroundColor = '#ccc';
}

//Traversing Parent,child and sibling nodes
//parentNode and parentElement cna be interchanged
let itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ='#fffdd0';

//ChildNodes and children do the same but childNodes considers line breaks
console.log(itemList.children);
//FirstChild and FirstElementChild are also same..but elementChild doesn't consider line breaks
console.log(itemList.firstElementChild);
//Same for LastChild and LastElementChild

//nextElementSibling and previousElementSibling

//Create Element
let newdiv = document.createElement('div');
//Add class and id
newdiv.className='NewClass';
newdiv.id = 'newId';
newdiv.setAttribute('title','New Div');
let text = document.createTextNode('By Srinath');
newdiv.appendChild(text);
console.log(newdiv);
newdiv.style.fontWeight = 500;
newdiv.style.color='black';
let head = document.querySelector('header .container');
head.insertAdjacentElement('beforeend',newdiv);
//Adding Event Listener
let button = document.getElementById('button').addEventListener('click',buttonClick);
function buttonClick(e){
    let res = document.getElementById('result');
    res.innerHTML='<h4>Items Added to Cart</h4>';
    console.log('Event :'+ e.type);
}
let play = document.getElementById('box1');
play.style.alignSelf='center';
play.addEventListener('mousemove', Play);
function Play(e){
    console.log(e.type);
    play.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
    console.log()
}

//Final Project
let form = document.getElementById('addForm');
let ItemLists = document.getElementById('items');
//Add eventListner to form
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    //Get value of the input
    let Values = document.getElementById('item').value;
    //Create element
    let li = document.createElement('li');
    li.classList('list-group-item');
    //Adding value to the created element
    li.appendChild(document.createTextNode(Values));
    ItemLists.appendChild(li);
}

