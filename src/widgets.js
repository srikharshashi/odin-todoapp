import {Project,Todo} from "./models";
import { renderTodos } from "./render";

export function getprojectBox(index, projectName) {
    const projdiv = document.createElement("div");
    projdiv.textContent = projectName;
    projdiv.classList.add("projdiv");
    projdiv.dataset.index=index;
    return projdiv;
}

export function getTodoBox(todoslistbox,project,todoobj)
{
    const tododiv=document.createElement("div");
    const todoTitle=document.createElement(`p`);
    todoTitle.textContent=todoobj.title;
    todoTitle.classList.add("todoTitle");
    if(todoobj.isCompleted){
        todoTitle.style.textDecoration="line-through";
    }
    

    const todotitlediv=document.createElement("div");
    todotitlediv.appendChild(todoTitle);
    todotitlediv.classList.add("todotitlediv");


    //Options DIV
    const todooptions=document.createElement("div");
    todooptions.classList.add("todo-options");

    //            Defining options
    const editdiv =document.createElement("div");
    const editicon=document.createElement("i");
    editdiv.appendChild(editicon);
    editicon.classList.add("fa-solid");
    editicon.classList.add("fa-xl");
    editicon.classList.add("fa-pencil");

    const strikediv=document.createElement("div");
    const strikeicon=document.createElement("i");
    strikediv.appendChild(strikeicon);
    strikeicon.classList.add("fa-solid");
    strikeicon.classList.add("fa-xl");
    strikeicon.classList.add("fa-strikethrough");


    const delicondiv =document.createElement("div");
    const delicon=document.createElement("i");
    delicondiv.appendChild(delicon);
    delicon.classList.add("fa-solid");
    delicon.classList.add("fa-xl");
    delicon.classList.add("fa-trash-can");
    
    //             Defining on click 

    editdiv.onclick=()=>{
       
    }

    delicondiv.onclick=()=>{
        let index = project.todos.indexOf(todoobj);
            if (index !== -1) {
            project.todos.splice(index, 1);
            renderTodos(project,todoslistbox);
}

    }

    strikediv.onclick=()=>{
       todoobj.isCompleted=todoobj.isCompleted==true?false:true;
        renderTodos(project,todoslistbox);
    }







    todooptions.appendChild(editdiv);
    todooptions.appendChild(strikediv);
    todooptions.appendChild(delicondiv);

    tododiv.appendChild(todotitlediv);
    tododiv.appendChild(todooptions);
    tododiv.classList.add("tododiv");
    console.log(todoobj);
    return tododiv;

}
