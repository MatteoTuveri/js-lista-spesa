const itemList=[];
let item;
while (item !== 'stop'){

    item = prompt('Inserire un altro articolo o scrivere "stop" se si vuole concludere la lista');

    if(isNaN(parseInt(item) && item !='stop')){
        itemList.push(item);
    }
    else{
        alert('inserire solo lettere')
    }
    
}
let stamp = document.getElementById('stamp');
for(let j=0;j<itemList.length;j++){
    stamp.innerHTML+=itemList[j]+' ';
}

console.log(itemList);