import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import StartInfo from "./Components/Main/StartInfo";
import Works from "./Pages/Works";
import Ceilings from "./Pages/Ceilings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartInfo />} />
        <Route path="/works" element={<Works />} />
        <Route path="/ceilings" element={<Ceilings />} />
      </Route>
    </Routes>
  );
};

export default App;
