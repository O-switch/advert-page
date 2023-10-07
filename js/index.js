let screen = document.querySelector('#screen')
let btn = document.querySelectorAll('button')

let string = ''
let arr = Array.from(btn)
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            string = eval(string)
            screen.innerText = string
        } else if (e.target.innerText == 'DE') {
            string = string.substring(0, string.length - 1)
            screen.innerText = string
        } else if (e.target.innerText == 'AC') {
            string = ''
            screen.innerText = string
        }
        else if (e.target.innerText == '%') {
            string = eval(string / 100)
            screen.innerText = string
        } else {
            string += e.target.innerText
            screen.innerText = string
        }
    })
})