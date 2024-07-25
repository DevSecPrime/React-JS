import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" h-screen flex justify-center flex-col items-center bg-gray-800 w-full">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
