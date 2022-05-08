import {
    getprojectBox,
    getTodoBox
} from "./widgets";
import {
    Todo
} from "./models";

export function renderProjects(projectsListBox, projects, todosListBox,currentProject) {
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
        console.log("project modal launch trigger");
        const mainmodal = document.querySelector(".proj-main-modal");
        mainmodal.style.display = "flex";
    }


    //append the other projects 
    projectsListBox.appendChild(addproj);
    let c = 0;
    projects.forEach(e => {
        let box = getprojectBox(c, e.name);
        box.onclick = function () {
            projectsListBox.childNodes.forEach((f) => {
                f.classList.remove("active-projbox");
            });

            box.classList.add("active-projbox");

            currentProject=projects[parseInt(box.dataset.index)];

            renderTodos(projects[parseInt(box.dataset.index)], todosListBox);
        }
        projectsListBox.appendChild(box);
        c = c + 1;
    });
}

export function renderTodos(project, todosListBox) {
    console.log("in render todos");
    todosListBox.replaceChildren();
    if (project == null) {
        const error = document.createElement("p");
        error.textContent = "No Project is selected";
        todosListBox.appendChild(error);
        error.style.textAlign = "center";
        error.style.margin = "20px";
    } else {
        //change the title
        const title = document.querySelector(".maintodosTitle");
        title.textContent = "Todos  :: " + project.name;

        //append the add todo button if a project is selected
        const addtodo = document.createElement("div");
        addtodo.classList.add("addtodo-button");


        const addicon = document.createElement("i");
        addicon.classList.add("fa-solid");
        addicon.classList.add("fa-plus");
        const addtodotitle = document.createElement("p");
        addtodotitle.style.margin = "10px";
        addtodotitle.textContent = "New Todo";
        addtodo.appendChild(addicon);
        addtodo.appendChild(addtodotitle);
        addtodo.onclick = function () {
            console.log(`add todo trigger for ${project.name}`);
            const mainmodal=document.querySelector(".todo-main-modal");
            mainmodal.style.display="flex";
        }

        todosListBox.appendChild(addtodo);

        project.todos.forEach((e)=>{
            todosListBox.appendChild(getTodoBox(e));
        });

    }
}