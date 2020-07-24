function Model() {
    this.name;
    this.id;
}
let items = ["first", "second", "third", "fourth", "fives"];

var models = [];
for (i = 0; i < items.length; i++) {
    var model = new Model();
    model.id = i;
    model.name = items[i];
    models.push(model);
}

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


