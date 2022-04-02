import "./App.css";
import Home from "./pages/Home";
import ContextApiProvider from "./context/ContextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextApiProvider>
          <Header />
          <Routes>
            <Route exact path="/nyttop" element={<Home />} />
            <Route path="/Details" element={<Details />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
          <Home />
        </ContextApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
