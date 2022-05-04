import {getprojectBox} from "./widgets";
import {Todo} from "./models";

export function renderProjects(projectsListBox,projects,todosListBox) {
    //remove all the children and re add them 
    projectsListBox.replaceChildren();


    //add projects logic
    const addproj = getprojectBox(0, "");
    const addicon = document.createElement("i");
    addicon.classList.add("fa-solid");
    addicon.classList.add("fa-plus");
    const addprojtitle = document.createElement("p");
    addprojtitle.style.margin = "10px";
    addprojtitle.textContent = "New Project";
    addproj.appendChild(addicon);
    addproj.appendChild(addprojtitle);
    addproj.onclick = function () {
        console.log("abcbg");
        const mainmodal = document.querySelector(".proj-main-modal");
        mainmodal.style.display = "flex";
    }


    //append the other projects 
    projectsListBox.appendChild(addproj);
    let c = 0;
    projects.forEach(e => {
        let box=getprojectBox(c, e.name);
        box.onclick=function () {
            projectsListBox.childNodes.forEach((f)=>{
                f.classList.remove("active-projbox");
            });
            box.classList.add("active-projbox"); 
            // renderTodos(projects[praseInt(box.dataset.index)],todosListBox); 
            renderTodos(projects[parseInt(box.dataset.index)],todosListBox);         
        }
        projectsListBox.appendChild(box);
        c = c + 1;
    });
}

export function renderTodos(project,todosListBox) {
    todosListBox.replaceChildren();
    if(project==null)
    {
        const error=document.createElement("p");
        error.textContent="No Project is selected";
        todosListBox.appendChild(error);
        error.style.textAlign="center";
        error.style.margin="20px";
    }
    else
    {
        //change the title
        const title=document.querySelector(".todosTitle");
        title.textContent="Todos  :: "+project.name;

        //append the add todo button if a project is selected
        const addtodo=document.createElement("div");
        addtodo.classList.add("addtodo-button");
     

        const addicon = document.createElement("i");
        addicon.classList.add("fa-solid");
        addicon.classList.add("fa-plus");
        const addtodotitle = document.createElement("p");
        addtodotitle.style.margin = "10px";
        addtodotitle.textContent = "New Project";
        addtodo.appendChild(addicon);
        addtodo.appendChild(addtodotitle);
        addtodo.onclick = function () {
        console.log("add todo trigger");

    }

        







    todosListBox.appendChild(addtodo);



















        console.log(project);
    }
}