// Select the Element

let body = document.querySelector('body');
let yourName = document.querySelector('.name');
let clear = document.querySelector('.btn');
let box = document.querySelector('span');
let paragraph = document.querySelector('.info');


// Event to hide the inputBox and button


clear.addEventListener('click',()=>{
    if(yourName.value == ""){
        alert('Enter the name')
    }
    else{
    box.classList.toggle('hide');
    paragraph.classList.toggle('info')
    paragraph.style.transition = "3s ease-in"
    }
})

function change(){
    yourName.style.background = "#f20024";
}








// Waste
// yourName.placeholder.style.color = "#fff" 
// yourName.placeholder.style.color="red";   
// yourName.classList.add('hide')       
// clear.classList.add('hide')          

// let collection = ["green","red","blue","deeppink","#253526","#544141"];
// let random = Math.floor(Math.random()*collection.length)
// let colour = collection[random];
// body.style.background = colour;
// body.style.background = yourName.value;
// console.log(yourName.value);




// //AYUSH TYAGI
// let input = document.querySelector('input');
// let button = document.querySelector('button');

//  function changecolor()
//  {
//    var color = document.getElementById(color).value;
//    var body =document.getElementsByTagName('body')[0];
//    console.log(body);
//  }