var skyColor = 'white';

var phones = ['iphone', 'shawmi', 'samsung', 'lg', 'htc']
phones[1] = 'walton';

// check an element exist in an arry
if(phones.indexOf('oppo') == -1){
    console.log('opps! amir khan oppo is missing');
}

if(phones.indexOf('lg') != -1){
    console.log('Lg is available now');
}

//loop
var num = 0 
while(num <= 10){
    num++;
}

for(var i = 0; i< phones.length; i++){
    console.log('yo')
}

//function
function addThreeNumbers(number1, number2, number3){
    var total = number1 + number2 + number3;
    return total; 
}

var result = addThreeNumbers(87, 41, 56);
console.log('result value: ', result);

// object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: black
}