import { useRef, useState } from "react"
import TodoItem from "./TodoItem"
import todo_icon from "../assets/todo_icon.png"

const Todo = () => {
      const inputRef = useRef();
      const [todolist, setTodolist] = useState([]);
      const add = () => {
            const inputText = inputRef.current.value.trim();
            if (inputText === "") {
                  return null;
            }
            const newTodo = {
                  id: Date.now(),
                  text: inputText,
                  isComplete: false
            }
            setTodolist((prev) => [...prev, newTodo]);
            inputRef.current.value = "";
      }
      const deleteTodo = (id) => {
            setTodolist((prevTodos) => {
                  return prevTodos.filter((todo) => todo.id !== id)
            })
      }
      return (
            <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
                  {/*-------Title--------*/}
                  <div className="flex items-center mt-7 gap-2">
                        <img className="w-8" src={todo_icon} alt="Todo icon" />
                        <h1 className="text-3xl font-semibold">To-do List</h1>
                  </div>
                  {/*-------Input Box----*/}
                  <div className="flex items-center my-7 bg-gray-200 rounded-full">
                        <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your task" />
                        <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">Add +</button>
                  </div>
                  {/*-------todo list----*/}
                  <div>
                        {todolist.map((item) => (
                              <TodoItem key={item.id} id={item.id} text={item.text} isComplete={item.isComplete} deleteTodo={deleteTodo} />
                        ))}
                  </div>
            </div>
      )
}

export default Todo