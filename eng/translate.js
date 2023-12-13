const node_for_click = document.getElementById('for_click')

function find_edit()
{
    document.all[9].innerHTML = "Eremeeva"
    document.all[10].innerHTML = "Anna"
    document.all[11].innerHTML = "Vladimirovna"
    document.all[12].innerHTML = "FEM"
    document.all[14].innerHTML = "Tomsk"
    document.all[15].innerHTML = "Tomskaya oblast"


}

node_for_click.addEventListener("click",find_edit)
