import "./App.css";

import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";
import SideBar from "./layout/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import CreateTaskModal from "./components/CreateTaskModal/CreateTaskModal";

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <SideBar />
        <main className="main-content">
          <Routes>
            <Route path="/todolist/" element={<MainContent sort="" />} />
            <Route path="/todolist/new" element={<MainContent sort="New" />} />
            <Route
              path="/todolist/doing"
              element={<MainContent sort="Doing" />}
            />
            <Route
              path="/todolist/done"
              element={<MainContent sort="Done" />}
            />
            <Route path="/todolist/create" element={<CreateTaskModal />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
