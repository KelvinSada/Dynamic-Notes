const textArea = document.getElementById("dynamic-note");
const total = document.querySelector(".total");
console.log(textArea);

function displayTexts (){
  textArea.addEventListener("input", function(){
  textArea.removeAttribute("placeholder")
  const textValue = textArea.value
  getNumbers (textValue)
  
  total.innerHTML = "&#8358 "+sumThemUp(numbersAbove50).toLocaleString("en-US");
  })
}
displayTexts();

function getNumbers (texts){
  let numBersGroup = texts.replace(/(\d+)[,]?(\d+)[,]?(\d+)/g,"$1$2$3")
  
  const stringedNumbers = numBersGroup.match(/\d+/g);
  numbersArray = stringedNumbers.map(x => parseInt(x));
  numbersAbove50 = numbersArray.filter(x => x >= 50)
  sumThemUp (numbersAbove50)
}

function sumThemUp (value){
  let total = 0;
  for (i = 0;i<value.length;i++){
    total+=value[i];
  }
 return total;
}



