interface TodoItem {
	id: number,
	title: string,
	completedOn?: Date,
	status: "done" | "in-progress" | "todo"
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: "in-progress" },
    { id: 3, title: "Write the best app in the world", status: "todo" },
]


function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo: TodoItem = {
        id,
        title: todo,
        status: "todo",
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId(items: TodoItem[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))