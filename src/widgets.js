import {Project,Todo} from "./models";

export function getprojectBox(index, projectName) {
    const projdiv = document.createElement("div");
    projdiv.textContent = projectName;
    projdiv.classList.add("projdiv");
    projdiv.dataset.index=index;
    return projdiv;
}

export function getTodoBox(todoobj)
{
    const tododiv=document.createElement("div");
    const todoTitle=document.createElement(`p`);
    todoTitle.textContent=todoobj.title;
    todoTitle.classList.add("todoTitle");
    tododiv.appendChild(todoTitle);

    tododiv.classList.add("tododiv");
    console.log(todoobj);
    return tododiv;

}