import "./App.css";
import Home from "./pages/Home";
import ContextApiProvider from "./context/ContextApi";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ContextApiProvider>
        <Routes>

        </Routes>
        <Home />
      </ContextApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
