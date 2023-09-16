import Preview from "@/Pages/Preview";
import LinksPage from "./Pages/LinksPage";
import { Form, Profile } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Provider from "@/context/Provider";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-['Poppins']  ">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LinksPage />}>
              <Route path="links" element={<Form />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="preview" element={<Preview />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-center" richColors />
      </Provider>
    </div>
  );
}

export default App;
