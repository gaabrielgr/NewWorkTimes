import "./App.css";
import Home from "./pages/Home";
import ContextApiProvider from "./context/ContextApi";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/Header";
import Details from "./pages/Details";
import Technology from "./pages/Technology";
import Science from "./pages/Science";
import Health from "./pages/Health";
import World from "./pages/World";
import Politics from "./pages/Politics";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextApiProvider>
          <Header />
          <Routes>
            <Route exact path={"/nyttop"} element={<Home />} />
            <Route path="/science" element={<Science />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/world" element={<World />} />
            <Route path="/health" element={<Health />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details" element={<Details />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
          <Footer />
        </ContextApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
