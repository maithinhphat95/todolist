import "./App.css";
import Header from "./components/Header/Header";
import Tasklist from "./components/TaskList/Tasklist";
function App() {
  return (
    <div className="container">
      <Header />
      <Tasklist />
    </div>
  );
}
export default App;
