import "./style.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import "./fonts/zebrazil.ttf";
import {getModalBodyProj} from "./projmodal";
import {Project,Todo} from "./models"
import {fetchProjects,getProjectsobjList,getProjectsList} from "./datacalls";
import {getprojectBox} from "./widgets";
import {renderProjects,renderTodos} from "./render";


let projects = []
var currentProject=null;








const body = document.querySelector(".main-content");
const mainbody = document.createElement("div");
mainbody.classList.add("mainbody");

const projectspane = document.createElement("div");
projectspane.classList.add("main-projects");

const todospane = document.createElement("div");
todospane.classList.add("main-tasks");

mainbody.appendChild(projectspane);
mainbody.appendChild(todospane);



//Create the nav
const nav = document.createElement("nav");
//Nav bar content
const mainicon = document.createElement("i");
mainicon.classList.add("fa-solid");
mainicon.classList.add("fa-list-check");
mainicon.classList.add("fa-xl");
const appname = document.createElement("p");
appname.textContent = "Odin Todo";
appname.classList.add("appname");

nav.appendChild(mainicon);
nav.appendChild(appname);

const projectsTitle = document.createElement("p");
projectsTitle.textContent = "Projects";
projectsTitle.classList.add("projectsTitle");
projectspane.appendChild(projectsTitle);

const projectsListBox = document.createElement("div");
projectsListBox.classList.add("projectsListBox");
projectspane.appendChild(projectsListBox);






//STUFF TO RENDER THE TODO ON THE SCREEN 
const todoTilebox=document.createElement("div");
const todosTitle=document.createElement("p");
todosTitle.textContent="Todos ::";
todosTitle.classList.add("todosTitle");
todoTilebox.classList.add("todosTitleBox");
todoTilebox.appendChild(todosTitle);

const todosListBox=document.createElement("div");
todosListBox.classList.add("todosListBox");







todospane.appendChild(todoTilebox);
todospane.appendChild(todosListBox);





projects=fetchProjects();
renderProjects(projectsListBox,projects,todosListBox);

renderTodos(null,todosListBox);





body.appendChild(nav);
body.appendChild(mainbody);














//MODAL STUFF FOR NEW PROJECT
//create the modal 
const modalmain = document.createElement("div");
modalmain.classList.add("proj-main-modal");
let modalbody = document.createElement("div");
modalbody.classList.add("proj-modal-body");

//designing the modal body
modalbody =getModalBodyProj(modalmain,modalbody,projects,projectsListBox,todosListBox);

modalmain.appendChild(modalbody);
body.appendChild(modalmain);