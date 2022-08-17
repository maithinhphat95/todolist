import "./App.css";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";
import SideBar from "./layout/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import CreateTaskModal from "./components/CreateTaskModal/CreateTaskModal";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (string) => {
    setSearchText(string);
  };
  return (
    <div className="container">
      <Header handleSearch={handleSearch} />
      <div>
        <SideBar />

        <main className="main-content">
          <Routes>
            <Route
              path="/todolist/search"
              element={<MainContent sort="" search={searchText.trim()} />}
            />
            <Route
              path="/todolist/"
              element={<MainContent sort="" search="" />}
            />
            <Route
              path="/todolist/new"
              element={<MainContent sort="New" search="" />}
            />
            <Route
              path="/todolist/doing"
              element={<MainContent sort="Doing" search="" />}
            />
            <Route
              path="/todolist/done"
              element={<MainContent sort="Done" search="" />}
            />
            <Route path="/todolist/create" element={<CreateTaskModal />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
