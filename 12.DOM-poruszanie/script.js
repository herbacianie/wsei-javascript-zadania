// zad 1
const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

//1.1
console.log(buz.parentElement);
//1.2
console.log(baz.previousElementSibling);
//1.3
console.log(foo.children);
//1.4
console.log(foo.parentNode);
//1.5
console.log(foo.firstChild);
//1.6
console.log(foo.children[Math.floor(foo.children.length / 2)]);


// zad 2
const displayText = (element) => {
    element.addEventListener("click", () => {
      const elementWithText = element.querySelector("div div div div div:nth-child(2) div div"); 
      const textToDisplay = elementWithText.innerHTML
      console.log(textToDisplay);
    });
};


// zad 3
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const span = button.nextElementSibling;
      if (span.style.display === "none") {
        span.style.display = "block";
      } else {
        span.style.display = "none";
      }
    });
  })
  
  
  // zad 4
  const buttons = document.querySelectorAll("#ex3 div button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const parentElement = button.parentElement;
    parentElement.style.backgroundColor  = randomColor;


  });
})


// zad 5
const divs = document.querySelectorAll("#ex5 div");
const listItems = document.querySelectorAll("#ex5 li");

//5.1
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        listItems[0].style.backgroundColor = colors;
    })

})

//5.2
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        listItems[listItems.length - 1].style.backgroundColor = colors;
    })

})

//5.3
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;

        for (let i = 0; i < listItems.length; i++) {
            if(i % 2 !== 0){
                listItems[i].style.backgroundColor = colors;
            }
            
        }

        
    })

})

//5.4
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        for (let i = 0; i < listItems.length; i++) {          
                listItems[i].style.backgroundColor = colors;      
        }     
    })
})


//5.5
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        div.parentElement.style.background = colors;
    })

})


//zad 6
const mainElement = document.querySelector("#ex6");
console.log(mainElement)

//6.1
const elementOne = mainElement.firstElementChild.firstElementChild.firstElementChild;

//6.2
const elementTwo = mainElement.firstElementChild.parentElement.firstElementChild.firstElementChild.nextSibling.parentElement;

//6.3
const elementThree = mainElement.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
