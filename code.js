const label = document.getElementById("word")
const textInArray = ["macaco", "tornozelo", "tubo", "ganhou"]
let teste = ["moyses", "teste"]
let interval = 1000


function changeWord(newWord) {
    label.innerText = newWord
}

function play(){
    getText();
    getInterval()

    let counter = 0

    const timer = setInterval(() => {
        changeWord(teste[counter])
        console.log(counter)
        counter++
        if (counter == teste.length) {
            clearInterval(timer)
        }
    }, interval);
}

function getText(){
    let text = document.forms["principal"]["ftext"].value;
    teste = text.split(" ")
}

function getInterval(){
    let number = document.forms["principal"]["fnumber"].value;
    const newInterval = parseInt(number)
    if (!isNaN(newInterval)) {
        interval = number   
    }
}