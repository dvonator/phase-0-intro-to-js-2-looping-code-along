// Code your solutions in this file

const list = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(list,event) {
    let newList = [];
    for(let i = 0; i < list.length; i++) {
        
    newList.push(`Thank you, ${list[i]}, for the wonderful ${event} gift!`)
     
    }
    return newList
}
 
function countDown(countdown) {
    while(countdown >= 0) {
        console.log(countdown--);
    }
}