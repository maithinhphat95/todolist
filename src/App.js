import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <MainContent />
    </div>
  );
}
export default App;
