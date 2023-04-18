let btnChahge = document.querySelector("#btnChange")
let block = document.querySelector("#block")

let statusTheme = "no theme"

btnChahge.addEventListener("click", () => {
    if (statusTheme == "no theme") {
        block.classList.add("whiteTheme")
        statusTheme = "whiteTheme"
    }
    if (statusTheme == "whiteTheme"){
        statusTheme = "darkTheme"
        block.classList.add("darkTheme")
        block.classList.remove("whiteTheme")
    }
    if (statusTheme == "darkTheme"){
        statusTheme = "whiteTheme"
        block.classList.add("whiteTheme")
        block.classList.remove("darkTheme")
    }
})
