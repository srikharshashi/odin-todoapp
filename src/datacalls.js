import * as data from "./sampleop.json";
import {Project,Todo} from "./models";

export function fetchProjects() {
    var jsonData = data.default;
    return getProjectsobjList(jsonData);
}

export function getProjectsobjList(biglist) {
    const pobjlist = biglist.map((pmap) => {
        const todoslist = pmap.todos.map((todo) => new Todo(todo.title, todo.description, todo.project, todo.time,todo.date,todo.isCompleted));
        return new Project(pmap.name, todoslist);
    });

    return pobjlist;
}

export function getProjectsList(projobjlist) { //List<Map<String,dynamic>>
    return projobjlist.map((proj) => {
        return {
            "name": proj.name,
            "todos": proj.todos.map((todo) => {
                return {
                    "title": todo.title,
                    "description": todo.description,
                    "project": todo.project,
                    "time": todo.time,
                    "isCompleted":todo.isCompleted
                }
            })
        };
    });
}

