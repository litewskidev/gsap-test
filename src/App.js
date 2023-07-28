import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content.jsx";
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Content /> } />
      </Routes>
    </main>
  );
}

export default App;
