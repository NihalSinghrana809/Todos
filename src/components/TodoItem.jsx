import tick from "../assets/tick.png"
import delete_icon from "../assets/delete.png"

const TodoItem = ({ text, id, isComplete, deleteTodo }) => {
      return (
            <div className="flex items-center my-3 gap-2">
                  <div className="flex flex-1 items-center cursor-pointer">
                        <img className="w-7" src={tick} alt="Complete task" />
                        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
                  </div>
                  <img onClick={() => { deleteTodo(id) }} className="w-3.5 cursor-pointer" src={delete_icon} alt="Delete task" />
            </div>
      )
}

export default TodoItem