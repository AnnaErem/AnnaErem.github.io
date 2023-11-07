const node_for_click = document.getElementById('for_click')

function find_edit(){
const name1 = document.getElementsByTagName('span')[2]
console.log(name1.innerText)
name1.innerText = 'Eremeeva'

const name2 = document.getElementsByTagName('span')[3]
console.log(name2.innerText)
name2.innerText = 'Anna'

const name3 = document.getElementsByTagName('span')[4]
console.log(name3.innerText)
name3.innerText = 'Vladimirovna'
}

node_for_click.addEventListener("click",find_edit)
