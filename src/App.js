import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
// import CreatTaskModal from "./components/CreatTaskModal/CreatTaskModal";
function App() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <MainContent />
      {/* <CreatTaskModal /> */}
    </div>
  );
}
export default App;
