import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content.jsx";
import Navbar from './components/Navbar/Navbar.jsx'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }, 4500)
  }, [])

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
