import "./App.css";
import LinksPage from "./Pages/LinksPage";
import { Navbar } from "./components";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 ">
      <div className="max-w-7xl mx-auto  ">
        <Navbar />

        <LinksPage />
      </div>
    </div>
  );
}

export default App;
