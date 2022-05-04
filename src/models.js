export class Project {
    constructor(name, todoss) {
        this.name = name;
        this.todos = todoss;
    }
}

export class Todo {
    constructor(title, desc, proj, timee) {
        this.title = title;
        this.description = desc;
        this.project = proj;
        this.time = timee;
    }
}
