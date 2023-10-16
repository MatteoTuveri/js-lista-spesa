const itemList=[];
let item;
while (item !== 'stop'){

    item = prompt('Inserire un altro articolo o scrivere "stop" se si vuole concludere la lista');

    console.log(item);

    if(item !=='stop' && isNaN(parseInt(item))){
        itemList.push(item);
    }
    else if(item ==='stop'){
        alert('lista terminata');
    }
    else{
        alert('inserire solo lettere');
    }
    
}
let stamp = document.getElementById('stamp');
for(let j=0;j<itemList.length;j++){
    stamp.innerHTML+=itemList[j]+' ';
}

console.log(itemList);