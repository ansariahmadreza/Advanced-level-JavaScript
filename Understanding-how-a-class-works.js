//////////////////عملکرد شبیه تابع سازنده است  در constructor 
//   رو  دارن اجزا کل ساخته میشن عناصر فراخوانی میشوند و در متد های خود ساخته کلاس که تقریبا به نوعی همان عملکرد توابع سازنده


class Task {
    constructor(title) {

        this.title = title
        this.compeleted = false
    }
}

class ToDoList {
    constructor(todoContainer) {

        this.todoContainer = todoContainer
        this.todos = JSON.parse(localStorage.getItem('todos')) || []
        this.addBtn = document.querySelector('#addBtn')
        this.clearBtn = document.querySelector('.clearButton')
        this.todoInput = document.querySelector('input')


        this.render()

        // console.log(this.todos)


    }
    render() {
        console.log('تودو لیست شروع به کار کرد')

        // this.todoContainer.innerHTML=''
        this.addTodosDom()
        this.saveTodos()

        this.addBtn.addEventListener('click', () => {
            this.addNewTodo(this.todoInput.value)

        })

        this.clearBtn.addEventListener('click', () => {
            this.clearTodos()

        })






    }

    addNewTodo(newTodoTitle) {
        console.log("new todo title:", newTodoTitle)
    }

    clearTodos() {
        console.log('مقدار تودو ها پاک شدن')
        this.todoInput.value = ''
    }


    addTodosDom() {
        console.log('تودو ها به دام اضافه شدند')
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }
}

const todo = new ToDoList(document.querySelector('ul'))


