console.log('sourced in ')


function divClick(event){
    console.log(' / ')
    document.querySelector('#viewer').value += '/'

}
function multClick(event){
    console.log(' * ')
    document.querySelector('#viewer').value += '*'
}
function sevClick(event){
    console.log('7')
    document.querySelector('#viewer').value += '7'
}
function eightClick(event){
    console.log('8')
    document.querySelector('#viewer').value += '8'
}
function nineClick(event){
    console.log('9')
    document.querySelector('#viewer').value += '9'
}
function fourClick(event){
    console.log('4')
    document.querySelector('#viewer').value += '4'
}
function fiveClick(event){
    console.log('5')
    document.querySelector('#viewer').value += '5'
}
function sixClick(event){
    console.log('6')
    document.querySelector('#viewer').value += '6'
}
function oneClick(event){
    console.log('1')
    document.querySelector('#viewer').value += '1'
}
function twoClick(event)
{
    console.log('2')
    document.querySelector('#viewer').value += '2'
}
function threeClick(event)
{
    console.log('3')
    document.querySelector('#viewer').value += '3'
}
function zeroClick(event)
{
    console.log('0')
    document.querySelector('#viewer').value += '0'
}
function dotClick(event)
{
    console.log('.')
    document.querySelector('#viewer').value += '0'
}
function plusClick(event)
{
    console.log(' + ')
    document.querySelector('#viewer').value += '+'
}
function equalClick(event)
{
    console.log('=')
    //document.querySelector('#viewer').value += '=' // will need this to send values to somewhare
    console.log(eval(document.querySelector('#viewer').value))
}
function clearClick(event)
{
    console.log('clear')
    document.querySelector('#viewer').value = ''
}

// function minClick(event){
//     console.log(' - ')
//     document.querySelector('#viewer').value += ' - '
// }

// function negClick(event) {
//     document.querySelector('#viewer').value += ' -'
// }

const button = document.querySelector(".minOrNeg");
let clickTimer = 0;
button.addEventListener(
    "click",
    function () {
        clearTimeout(clickTimer);
        clickTimer = setTimeout(function () {
            document.querySelector('#viewer').value += ' - '
            clickTimer = 0;
        }, 250);
    },
    false
);
button.addEventListener(
    "dblclick",
    function () {
        clearTimeout(clickTimer);
        document.querySelector('#viewer').value += ' -'
    },
    false
);

console.log(document.querySelector('#viewer').value)

let test = ['+']

console.log(test[0])

// see a potental break for neg numbers since i am using spaces to split my operators 


console.log(eval(input.value)) // this is the best way