import {
    Todo
} from "./models";
import {
    renderTodos
} from "./render";



export function getTodoModal(modalmain, modalbody, projects, todosListBox) {

    //Close Button
    const closebuttondiv = document.createElement("div");
    const closebutton = document.createElement("i");
    closebutton.classList.add("fa");
    closebutton.classList.add("fa-xl");
    closebutton.classList.add("fa-window-close");
    closebuttondiv.onclick = function () {
        const mainmodal = document.querySelector(".todo-main-modal");
        mainmodal.style.display = "none";
    };
    closebuttondiv.appendChild(closebutton);
    modalbody.appendChild(closebuttondiv);

    //title
    const modaltitle = document.createElement("p");
    modaltitle.textContent = "New Todo";
    modaltitle.classList.add("proj-modaltitle");
    modalbody.appendChild(modaltitle);

    //layout config
    const todomodbox = document.createElement("div");
    const todomodbox1 = document.createElement("div");
    const todomodbox2 = document.createElement("div");
    todomodbox.classList.add("todomodbox");
    todomodbox1.classList.add("todomodbox1");
    todomodbox2.classList.add("todomodbox2");
    todomodbox.appendChild(todomodbox1);
    todomodbox.appendChild(todomodbox2);

    //TODOBOX-1

    //TITILE INPUT 
    const titleipdiv = document.createElement("div");
    titleipdiv.classList.add("todo-titleipdiv");

    const title = document.createElement("p");
    title.textContent = "Enter Title";
    title.style.margin = "10px 5px";
    title.style.textAlign = "center";

    const titleip = document.createElement("input");
    titleip.type = "text";
    titleip.classList.add("todotitleip");
    titleipdiv.appendChild(title);
    titleipdiv.appendChild(titleip);
    titleip.id = "titleip";


    //DESCRIPTION INPUT 
    const descipdiv = document.createElement("div");
    descipdiv.classList.add("todomod-descip-div");

    const desctitle = document.createElement("p");
    desctitle.textContent = "Enter Description";
    desctitle.style.margin = "10px 5px";
    desctitle.style.textAlign = "center";
    descipdiv.appendChild(desctitle);

    const descip = document.createElement("textarea");
    descip.classList.add("todo-descip");
    descipdiv.appendChild(descip);
    descip.id = "descip";




    todomodbox1.appendChild(titleipdiv);
    todomodbox1.appendChild(descipdiv);


    //TODO MODAL BOX -2
    //DATE PICKER 

    const datetitle = document.createElement("p");
    datetitle.textContent = "Chose a Date";
    datetitle.style.margin = "10px 5px";
    datetitle.style.textAlign = "center";


    //date ip
    const dateip = document.createElement("input");
    dateip.classList.add("todo-mod-dateip");
    dateip.type = "date";
    dateip.id = "dateip";


    const timetitle = document.createElement("p");
    timetitle.textContent = "Chose a Time";
    timetitle.style.margin = "10px 5px";
    timetitle.style.textAlign = "center";

    //time ip
    const timeip = document.createElement("input");
    timeip.type = "time";
    timeip.classList.add("todo-mod-dateip");
    timeip.id = "timeip";

    todomodbox2.appendChild(datetitle);
    todomodbox2.appendChild(dateip);
    todomodbox2.appendChild(timetitle);
    todomodbox2.appendChild(timeip);

    modalbody.appendChild(todomodbox);



    //submit button
    const submit = document.createElement("div");
    submit.classList.add("proj-submit");
    submit.textContent = "Submit";
    submit.onclick = () => {
        const datee = document.querySelector("#dateip");
        const timee = document.querySelector("#timeip");
        const descc = document.querySelector("#descip");
        const titlee = document.querySelector("#titleip");

        if (datee.value && timee.value && descc.value && titlee.value) {

            const p = document.querySelector(".active-projbox");
            const proj = projects[parseInt(p.dataset.index)];
            const newtodo = new Todo(titlee.value, descc.value, proj.name, timee.value, datee.value,false);
            proj.todos.push(newtodo);
            renderTodos(proj, todosListBox);
            modalmain.style.display = "none";

        }

    };
    modalbody.appendChild(submit);
    return modalbody;
}