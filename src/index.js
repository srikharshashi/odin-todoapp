import "./style.css";

//Sample Data
// const random=[
//     {
//         "name":"Panda",
//         "todos":[
//             {
//                 "tile":"abc",
//                 'description':"lmmm",
//                 "project":"Panda",
//                 "time":"11092002"
//             },
//             {
//                 "tile":"efg",
//                 'description':"lmmmaoo",
//                 "project":"Pandasss",
//                 "time":"11092002333"
//             },
//             {
//                 "tile":"ijk",
//                 'description':"lmaaaoo",
//                 "project":"Pandesss",
//                 "time":"11092002eee333"
//             },
//         ],
//     },
//     {
//         "name":"Mango",
//         "todos":[
//             {
//                 "tile":"lnop",
//                 'description':"lsssmmm",
//                 "project":"Panda",
//                 "time":"11092002"
//             },
//             {
//                 "tile":"dfg",
//                 'description':"lmmsssmaoo",
//                 "project":"Pansssdasss",
//                 "time":"11092002333"
//             },
//             {
//                 "tile":"khf",
//                 'description':"lmaasssaoo",
//                 "project":"Pandxfsesss",
//                 "time":"11092002saw2dfeee333"
//             },
//         ],
//     },
// ]
function Project(name,todoss){
    this.name=name;
    this.todos=todoss;
}

function Todo(title,desc,proj,timee) {
    this.title=title;
    this.description=desc;
    this.project=proj;
    this.time=timee;
}

function getProjectsobjList(biglist)
{   
    const pobjlist=biglist.map((pmap) => {
        const todoslist=pmap.todos.map((todo)=> new Todo(todo.title,todo.description,todo.project,todo.time));
        return new Project(pmap.name,todoslist);
    });

    return pobjlist;
}

function getProjectsList(projobjlist){   //List<Map<String,dynamic>>
    return projobjlist.map((proj)=>{
        return {
            "name":proj.name,
            "todos":proj.todos.map((todo)=>{
                return {
                    "title":todo.title,
                    "description":todo.description,
                    "project":todo.project,
                    "time":todo.time
                }
            })
        };
    });
}

const body=document.querySelector(".main-content");

const nav=document.createElement("nav");

const mainbody=document.createElement("div");
mainbody.classList.add("mainbody");

const projectspane=document.createElement("div");
projectspane.classList.add("main-projects");

const taskspane=document.createElement("div");
taskspane.classList.add("main-tasks"); 

mainbody.appendChild(projectspane);
mainbody.appendChild(taskspane);

body.appendChild(nav);
body.appendChild(mainbody);
