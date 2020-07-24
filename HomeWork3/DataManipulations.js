function CreateElement(type, className, value, name) {
    let item = document.createElement(`${type}`);
    item.className = className;
    if(value){
        item.value = `${value}`;
    }
    if(name){
        item.innerHTML = `${name}`;
    }    
    return item;
}











