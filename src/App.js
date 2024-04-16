import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        {/* Router Handling */}
      </div>
    </>
  );
}

export default App;
