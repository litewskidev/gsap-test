import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={ <Content /> } />
      </Routes>
    </main>
  );
}

export default App;
