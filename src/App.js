import Taskitem from "./components/task-item/Taskitem";
import "./App.css";
function App() {
  return (
    <div className="main">
      <Taskitem itemStatus="new" />
      <Taskitem taskName="Task 2" />
      <Taskitem taskName="Task 3" />
      <Taskitem taskName="Task 3" />
      <Taskitem taskName="Task 3" />
      <Taskitem taskName="Task 3" />
    </div>
  );
}

export default App;
