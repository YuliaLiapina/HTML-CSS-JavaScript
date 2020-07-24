let contentDiv = document.querySelector('.Content');
let button = document.querySelector('.GetData');

function getAllData() {
    for (var i = 0; i < models.length; i++) {
        var newElement = CreateElement('div', 'DivNewElement');
        newElement.id = `${models[i].id}`;
        let inputText = CreateElement('INPUT', 'Input', `${models[i].name}`);
        inputText.readOnly = true;
        let deleteButton = CreateElement('button', 'Delete', 'delete', 'Delete');
        let editButton = CreateElement('button', 'Edit', 'Edit', 'Edit item');

        newElement.append(inputText);
        newElement.append(deleteButton);
        newElement.append(editButton);
        contentDiv.appendChild(newElement);
    }

    let divAddClear = CreateElement('div', 'DivAddClear', 'divAddClear')
    let newButtonAddItem = CreateElement('button', 'NewButtonAddItem', 'newButtonAddItem', 'Add Item');
    let newButtonClear = CreateElement('button', 'NewButtonClear', 'newButtonClear', 'Clear all');
    var saveButton = CreateElement('button', 'SaveChanges', 'SaveChanges', 'Save');

    divAddClear.append(newButtonAddItem);
    divAddClear.append(newButtonClear);
    contentDiv.appendChild(divAddClear);


    let buttonsDelete = document.querySelectorAll('.Delete');

    for (var i = 0; i < buttonsDelete.length; i++) {
        let butDel = buttonsDelete[i];
        butDel.addEventListener('click', DeleteItem);
    }

    let buttonsEdit = document.querySelectorAll('.Edit');
    for (var i = 0; i < buttonsEdit.length; i++) {
        let butEdit = buttonsEdit[i];
        butEdit.addEventListener('click', EditItem);
    }

    function DeleteItem() {
        var paragraf = this.parentNode;
        paragraf.parentNode.removeChild(paragraf);
    }

    function EditItem() {
        editButton = this;
        let parentButton = this.parentNode;
        textInput = parentButton.firstChild;
        textInput.readOnly = false;
        parentButton.replaceChild(saveButton, this);
    }

    saveButton.addEventListener('click', SaveItem);

    function SaveItem() {
        saveButton = this;
        let parentSaveButton = this.parentNode;
        textInput = parentSaveButton.firstChild;
        textInput.readOnly = false;
        let index = parentSaveButton.id;
        let currentValue = textInput.value;
        // let newInput = CreateElement('INPUT', 'saveInput', `${currentValue}`, `${currentValue}`)
        let newModel = new Model();
        newModel.name = currentValue;
        newModel.id = index;
        models.splice(index, 1, newModel);
        textInput.readOnly = true;
        // textInput.replaceWith(newInput);
        let deleteButton = CreateElement('button', 'Delete', 'delete', 'Delete');
        let editButton = CreateElement('button', 'Edit', 'Edit', 'Edit item');
        this.replaceWith(editButton);

        editButton.addEventListener('click', EditItem);
    }
    this.disabled = 'disabled';

    function AddNewItem() {

        let newElementAdd = CreateElement('div', 'DivNewElement');
        newElementAdd.id = models.length;
        let newDeleteButton = CreateElement('button', 'Delete', 'delete', 'Delete');
        let newSaveButton = CreateElement('button', 'SaveChanges', 'SaveChanges', 'Save');
        let inputText = CreateElement('INPUT', 'Input');

        newElementAdd.append(inputText);
        newElementAdd.append(newDeleteButton);
        newElementAdd.append(saveButton);
        contentDiv.lastChild.before(newElementAdd);

        newSaveButton.addEventListener('click', SaveItem);
        newDeleteButton.addEventListener('click', DeleteItem);
    }

    newButtonClear.addEventListener('click', ClearAll);
    function ClearAll() {
        let currentDiv = document.querySelectorAll('.DivNewElement');
        for (i = 0; i < currentDiv.length; i++) {
            currentDiv[i].parentNode.removeChild(currentDiv[i]);
        }
        let currentDivs = document.querySelectorAll('.newInputDiv');
        for (i = 0; i < currentDivs.length; i++) {
            currentDivs[i].parentNode.removeChild(currentDivs[i]);
        }
    }
    newButtonAddItem.addEventListener('click', AddNewItem);
}

button.addEventListener('click', getAllData);









