import {
    Project
} from "./models";
import { renderProjects } from "./render";

export function getModalBodyProj(modalmain, modalbody, projects,projectsListBox,todosListBox) {
    const closebuttondiv = document.createElement("div");
    const closebutton = document.createElement("i");
    closebutton.classList.add("fa");
    closebutton.classList.add("fa-xl");
    closebutton.classList.add("fa-window-close");
    closebuttondiv.onclick = function () {
        const mainmodal = document.querySelector(".proj-main-modal");
        mainmodal.style.display = "none";
    };
    closebuttondiv.appendChild(closebutton);
    modalbody.appendChild(closebuttondiv);

    const modaltitle = document.createElement("p");
    modaltitle.textContent = "New Project";
    modaltitle.classList.add("proj-modaltitle");
    modalbody.appendChild(modaltitle);

    const titleipdiv = document.createElement("div");
    titleipdiv.classList.add("proj-titleipdiv");

    const title = document.createElement("p");
    title.textContent = "Enter Title";
    title.style.margin = "10px 5px";

    const titleip = document.createElement("input");
    titleip.type = "text";
    titleip.classList.add("projtitleip");
    titleipdiv.appendChild(title);
    titleipdiv.appendChild(titleip);
    modalbody.appendChild(titleipdiv);

    const submit = document.createElement("div");
    submit.classList.add("proj-submit");
    submit.textContent = "Submit";
    submit.onclick = () => {
        const tit = document.querySelector(".projtitleip").value;
        if (tit) {
            projects.push(new Project(tit, []));
            console.log(tit);
            renderProjects(projectsListBox,projects,todosListBox);
            modalmain.style.display = "none";
            document.querySelector(".projtitleip").value = "";
        }
    };
    modalbody.appendChild(submit);
    return modalbody;
}