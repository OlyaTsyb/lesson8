// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
/*
let text = document.getElementById("textarea");
text.value = localStorage.getItem("text");
text.oninput = (ev) => {
    localStorage.setItem("text", ev.target.value);
}
*/


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.


/*
let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let check = document.getElementById("check");

let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let select = document.getElementById("select");

inp1.value = localStorage.getItem("inp1")
inp1.oninput = (ev) => {
    localStorage.setItem('inp1',inp1.value)
}


inp2.value = localStorage.getItem("inp2")
inp2.oninput = () => {
    localStorage.setItem('inp2', inp2.value)
}


radio1.oninput = () =>{
if (radio1.checked){
        localStorage.setItem('radio1', "true")
    }
}

radio1.checked =  JSON.parse(localStorage.getItem('radio1'));


radio2.oninput = () =>{
    if (radio2.checked){  
        localStorage.setItem('radio2', "true")
    }
    }
radio2.checked=  JSON.parse(localStorage.getItem('radio2'));

check.oninput = () => {
    if (check.checked){
        localStorage.setItem('option',"true")
        }else{
            localStorage.setItem('option',"false") 
        }
    }
    check.checked =  JSON.parse(localStorage.getItem('option'));



select.value = localStorage.getItem("select")
select.oninput = () => {
    localStorage.setItem('select', select.value)
}



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
/*
 let text = document.getElementById("textarea")
 let left = document.getElementById("left")
 let right = document.getElementById("right")
 let save = document.getElementById("save")
 
save.onclick = ()=> {
    localStorage.setItem(localStorage.length+1, text.value)
}

left.onclick = () => {
    let i ;
    for(let key in localStorage){
        if(localStorage.hasOwnProperty(key)){
            if(localStorage.getItem(key) === text.value){
                i = key
            }
        }
    }
    if(i === "1"){
        left.style.visibility = "hidden"
        return
    }
    text.value = localStorage.getItem(i -1)
}


right.onclick = () => {
    let r ;
    for(let key in localStorage){
        if(localStorage.hasOwnProperty(key)){
            if(localStorage.getItem(key) === text.value){
                r = key
            }
        }
    }
    if(r === localStorage.length.toString()){
        right.style.visibility = "hidden"
        return
    }
    text.value = localStorage.getItem(+r +1)
}
*/

// Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,- которые уже заполнены данными объекта 
/*
let formMain = document.forms.formMain
let fio = document.getElementById("fio")
let submit = document.getElementById("submit")
let wrap = document.getElementById("wrap")
let arrayUser = "arrayUser"
let editUser = {}

fio.oninput = (ev) => {
    localStorage.setItem("fio", ev.target.value)
}
phone.oninput = (ev) => {
    localStorage.setItem("phone", ev.target.value)
}
email.oninput = (ev) => {
    localStorage.setItem("email", ev.target.value)
}

firm.oninput = (ev) => {
    localStorage.setItem("firm", ev.target.value)
}
dept.oninput = (ev) => {
    localStorage.setItem("dept", ev.target.value)
}
date.oninput = (ev) => {
    localStorage.setItem("date", ev.target.value)
}

submit.onclick = (ev)=>{   
   
   let user = {
    id : Math.round(12345 - 0.5 + Math.random() * (2345677 - 0987655 + 1)), 
    name : localStorage.getItem("fio"),
    phone : localStorage.getItem("phone"),
    email : localStorage.getItem("email"),
    firm : localStorage.getItem("firm"),
    department : localStorage.getItem("dept"),
    dateOfBir : localStorage.getItem("date"),
    id : Math.round(12345 - 0.5 + Math.random() * (2345677 - 0987655 + 1)),
    }
    
    save(user)
    
}
   
function save(person){
    if(localStorage.hasOwnProperty(arrayUser)){
        let newArrayUsers = JSON.parse(localStorage.getItem(arrayUser));
        let isFind = newArrayUsers.find(value => value.id === person.id)
        if(isFind){
            let filter = newArrayUsers.filter(value => value.id !== person.id);
            filter.push(person);
            localStorage.setItem(arrayUser, JSON.stringify(newArrayUsers));
   
        }else {
            newArrayUsers.push(person)
            localStorage.setItem(arrayUser, JSON.stringify(newArrayUsers))
        } 
      }else {
        
        localStorage.setItem(arrayUser, JSON.stringify([person]))
      }
    
    }

    getUser()
function getUser(){
    if(localStorage.hasOwnProperty(arrayUser)){

        let arr = JSON.parse(localStorage.getItem(arrayUser));
        
        for(let item of arr){
            let userCard = document.createElement("div");
            
            let il = [item]
               for(let j in item){
                let str = document.createElement("h4")

                   console.log(j + ":" + item[j])
                   let d = [j + ":" + item[j]]
                   str.innerText = d.toString()
                 
                  userCard.appendChild(str)
               
                }
              
            console.log(il)
       

            userCard.style.width ="300px";
            
            userCard.style.float ="left";
            userCard.style.backgroundColor ="pink";
            userCard.style.border ="red 2px solid";
            let del = document.createElement("button");
            let edit = document.createElement("button");
            edit.innerText = "EDIT"
            del.innerText = "DELETE"
            del.onclick =() => {
                findId(item.id)
              
            }
            edit.onclick =() => {
                editus(item.id)
              
            }
            userCard.appendChild(del)
            userCard.appendChild(edit)
            wrap.appendChild(userCard)
                    }
                }
            }
            
          function findId(id){  
            let abs = JSON.parse(localStorage.getItem(arrayUser));
            let filter = abs.filter(item => item.id !== id);
            localStorage.setItem(arrayUser, JSON.stringify(filter));
            location.reload()
          }
          
        function editus(id){
            let abs = JSON.parse(localStorage.getItem(arrayUser));
            let pers = abs.find(item => item.id === id);
            for(let i = 0;i < formMain.children.length;i++){
                const any = formMain.children[i]
                if(any.name && any.type !== "submit"){
                    for(let key in pers){
                        if(any.name === key){
                            any.value = pers[key];   
                        }
                    }
                }
                
            }    
            editUser = pers
            
        }
*/ 