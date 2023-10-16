const itemList=[];
let item;
while (item !== 'stop' && item !== 'Stop'){
    item = prompt('Inserire un altro articolo o scrivere "stop" se si vuole concludere la lista');
    if(isNaN(parseInt(item))){
        itemList.push(item);
    }
    else{
        alert('inserire solo lettere')
    }
    
}
console.log(itemList);