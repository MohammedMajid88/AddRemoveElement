const elements = document.getElementById("elements");

const button = document.getElementById("add-element");
let id=1
button.onclick = function() {
    elements.insertAdjacentHTML('beforeend', `<div class="element"><h3>Element ${id} </h3><h4>This is an element</h4><button>Delete</button></div>`);
    id++;
    const element = document.getElementsByClassName("element");
    for (const item of element) {
        item.children[2].onclick = function () {
           item.remove()
        }
    }
 
};




