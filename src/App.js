import "./App.css";
import Home from "./pages/Home";
import ContextApiProvider from "./context/ContextApi";
import { BrowserRouter, Routes, Route, useNavigate, Link, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Details from "./pages/Details";
import Technology from "./pages/Technology";
import Science from "./pages/Science";
function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      
        <ContextApiProvider>
          <Header />
          <Routes>
         
            <Route exact path={"/nyttop"} element={<Home />}/> 
            <Route path="/science" element={<Science />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/details" element={<Details />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
        </ContextApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
