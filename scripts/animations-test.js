const transitions1 = document.querySelector(".transitions-move-1")
const transitions2 = document.querySelector(".transitions-move-2")
const transitions3 = document.querySelector(".transitions-move-3")
const transitions4 = document.querySelector(".transitions-move-4")
const transitions5 = document.querySelector(".transitions-move-5")

const selectionOption1 = document.querySelector(".selection-option-1")
const selectionOption2 = document.querySelector(".selection-option-2")
const selectionOption3 = document.querySelector(".selection-option-3")
const selectionOption4 = document.querySelector(".selection-option-4")
const selectionOption5 = document.querySelector(".selection-option-5")

selectionOption1.addEventListener("click", () => {
    console.log("pls")
    transitions1.style.display = "flex"
    transitions2.style.display = "none"
    transitions3.style.display = "none"
    transitions4.style.display = "none"
    transitions5.style.display = "none"
    selectionOption1.classList.add("active-text")
    selectionOption2.classList.remove("active-text")
    selectionOption3.classList.remove("active-text")
    selectionOption4.classList.remove("active-text")
    selectionOption5.classList.remove("active-text")
})

selectionOption2.addEventListener("click", () => {
    console.log("pls")
    transitions1.style.display = "none"
    transitions2.style.display = "block"
    transitions3.style.display = "none"
    transitions4.style.display = "none"
    transitions5.style.display = "none"
    selectionOption1.classList.remove("active-text")
    selectionOption2.classList.add("active-text")
    selectionOption3.classList.remove("active-text")
    selectionOption4.classList.remove("active-text")
    selectionOption5.classList.remove("active-text")
})

selectionOption3.addEventListener("click", () => {
    console.log("pls")
    transitions1.style.display = "none"
    transitions2.style.display = "none"
    transitions3.style.display = "block"
    transitions4.style.display = "none"
    transitions5.style.display = "none"
    selectionOption1.classList.remove("active-text")
    selectionOption2.classList.remove("active-text")
    selectionOption3.classList.add("active-text")
    selectionOption4.classList.remove("active-text")
    selectionOption5.classList.remove("active-text")
})

selectionOption4.addEventListener("click", () => {
    console.log("pls")
    transitions1.style.display = "none"
    transitions2.style.display = "none"
    transitions3.style.display = "none"
    transitions4.style.display = "block"
    transitions5.style.display = "none"
    selectionOption1.classList.remove("active-text")
    selectionOption2.classList.remove("active-text")
    selectionOption3.classList.remove("active-text")
    selectionOption4.classList.add("active-text")
    selectionOption5.classList.remove("active-text")
})

selectionOption5.addEventListener("click", () => {
    console.log("pls")
    transitions1.style.display = "none"
    transitions2.style.display = "none"
    transitions3.style.display = "none"
    transitions4.style.display = "none"
    transitions5.style.display = "block"
    selectionOption1.classList.remove("active-text")
    selectionOption2.classList.remove("active-text")
    selectionOption3.classList.remove("active-text")
    selectionOption4.classList.remove("active-text")
    selectionOption5.classList.add("active-text")
})



