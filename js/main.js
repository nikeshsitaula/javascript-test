/**
 * Created by Ghost on 1/18/2018.
 */
var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton=document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

//

for(var i=0;i<listItems.length;i++){
    //listItems[i].addEventListener("click",activateItem);
    ourList.addEventListener("click",activateItem);
}

function activateItem(e) {
    if(e.target.nodeName == "LI"){

        ourHeadline.innerHTML = e.target.innerHTML;
        for(var i=0;i<e.target.parentNode.childNodes.length;i++){
            e.target.parentNode.childNodes[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

ourButton.addEventListener("click",createNewItem);

function createNewItem() {

    ourList.innerHTML +="<li> something new "+ newItemCounter +"</li>";

            newItemCounter++;

}

