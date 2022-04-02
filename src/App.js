import "./App.css";
import Home from "./pages/Home";
import ContextApiProvider from "./context/ContextApi";
function App() {
  return (
    <div className="App">
      <ContextApiProvider>
        <Home />
      </ContextApiProvider>
    </div>
  );
}

export default App;
