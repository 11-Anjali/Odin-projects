function computer() {
    let ch = Math.random()
    let choice = ""
    if ( ch >= 0 && ch <= 0.33) {
        choice = "Rock"
    }
    else if (ch > 0.33 && ch <= 0.66 ) {
        choice = "Paper"
    }
    else {
        choice = "Scissor"
    }
    console.log(choice)
    return choice
}

function user() {
    let ch = prompt("Enter your choice: ")
    let pc = computer()

    if (ch == "Rock" && pc == "Paper") {
        alert(`Computer chose : ${pc}, You lose`)
    }
    else if (ch == "Rock" && pc == "Scissor") {
        alert(`Computer chose : ${pc}, You win`)
    }
    else if (ch == "Paper" && pc == "Scissor") {
        alert(`Computer chose : ${pc}, You lose`)
    }
    else if (ch == "Paper" && pc == "Rock") {
        alert(`Computer chose : ${pc}, You win`)
    }
    else if (ch == "Scissor" && pc == "Rock") {
        alert(`Computer chose : ${pc}, You lose`)
    }
    else if (ch == "Scissor" && pc == "Paper") {
        alert(`Computer chose : ${pc}, You lose`)
    }
    else {
        alert(`Computer chose : ${pc}, It's a tie!`)
    }
}
user()