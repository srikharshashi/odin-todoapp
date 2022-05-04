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
    tododiv.classList.add("tododiv");

}