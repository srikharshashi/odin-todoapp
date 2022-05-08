export class Project {
    constructor(name, todoss) {
        this.name = name;
        this.todos = todoss;
    }
}

export class Todo {
    constructor(title, desc, proj, timee,datee) {
        this.title = title;
        this.description = desc;
        this.project = proj;
        this.time = timee;
        this.date=datee;
    }
}
