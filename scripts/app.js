let element = document.getElementById("number");

element.addEventListener("input", function(){
    if(element.value >=10 || element.value <=-10)
    {
        alert("Number exceeding limit");
    }
    
});
let localFruitName = document.getElementById("fruitName");
let localFruitColor = document.getElementById("fruitColor");
let localFruitTaste = document.getElementById("fruitTaste");

const fruit={
    name:"Peach",
    color:"Orange",
    taste:"Sweet"

}

localFruitName.innerHTML = `Name: ${fruit.name}`;
localFruitColor.innerHTML = `Color: ${fruit.color}`;
localFruitTaste.innerHTML = `Taste: ${fruit.taste}`;

