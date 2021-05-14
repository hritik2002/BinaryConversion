const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('button')
var inputValue='';
btn.addEventListener('click',function(){
    
    input2.value = parseInt(input1.value).toString(2);
    console.log(parseInt(input1.value).toString(2))
    
})
