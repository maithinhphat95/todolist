import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";
import SideBar from "./layout/SideBar/SideBar";
// import CreatTaskModal from "./layout/CreatTaskModal/CreatTaskModal";

function App() {
  return (
    <div className="container">
      <Header />
      <SideBar />
    </div>
  );
}
export default App;
