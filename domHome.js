// 4todo list yaradacaqsiz form icinde h2 teqi 
// daxilinde form yazisi olacaq inputun yuxarisinda   qara reng ile 
// isarelenmis yerde Form yazisi js de yazilacaq ve  li lerin icinde
//  cut olanlari aciq mavi tek olanlarin bg coloru ag olsun 
let titles = document.getElementById("basliq")
let bttn = document.getElementById("addButton")
let lists = document.getElementById("todo-list")
function todosView() {
    titles.textContent = "Form"
    bttn.value = "Add"
    bttn.style.background = "blue"
    bttn.style.color = "white"
    bttn.style.border = "none"
    bttn.style.padding = "3px"
    bttn.style.marginLeft = "10px"
}
todosView()
function color() {
    let liItem = document.querySelectorAll(`#todo-list>li`)
    liItem.forEach((item,index) => {
        if (index % 2 == 0) {
            item.style.background="cyan"
            item.style.border = "1px solid black"
            item.style.padding = "4px"
            item.style.width = "200px"
        } else {
            item.style.background="white"
            item.style.border = "1px solid black"
            item.style.padding = "4px"
            item.style.width = "200px"
        }
    })
}
color()
