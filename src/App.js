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
            <Route path="/new" element={<MainContent sort="new" />} />
            <Route path="/doing" element={<MainContent sort="doing" />} />
            <Route path="/done" element={<MainContent sort="done" />} />
            <Route path="/" element={<MainContent sort="all" />} />
            <Route path="/create" element={<CreateTaskModal />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
