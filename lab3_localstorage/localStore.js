document.addEventListener('DOMContentLoaded', init);

let inpTitle, inpContent, clearButton;

function init(){
    inpTitle = document.getElementById("title");
    inpContent = document.getElementById("content");
    inpTitle.oninput = function(){storeText('Title', inpTitle.value)};
    inpContent.oninput = function(){storeText('Note', inpContent.value)};
    
    clearButton = document.getElementById("clear");
    clearButton.addEventListener ('click', clear);

    inpTitle.value = getItemFromLS('Title');
    inpContent.value = getItemFromLS('Note');



}


function storeText(key, value){
    if (localStorage)
        localStorage.setItem(key, value);
}

function clear(){
    inpTitle.value ="";
    inpContent.value = "";

    localStorage.removeItem('Title');
    localStorage.removeItem('Note');
}
    

function getItemFromLS(key){
    if(localStorage)
         return localStorage.getItem(key);
}



