let container = document.querySelector("container")

let arr = ["Web developer", "freelancer", "instructor"]
let arrindex = 0;
let charindex = 0;

function updateText() {
    container.innerHTML = `<h1> I am ${arr[arrindex].slice(0, charindex+1)} </h1>`
    charindex++
    console.log(arr.length, arrindex)
    if (charindex === arr[arrindex].length) {
        arrindex++
        charindex = 0
    }
    if (arrindex === arr.length) {
        arrindex = 0
    }
    setTimeout(updateText, 500)
}

updateText()