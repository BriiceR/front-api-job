import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import JobDetail from "./components/JobDetail/JobDetail";
import JobUpdate from "./components/JobUpdate";
import JobCreate from "./components/JobCreate";
import JobSearch from "./components/JobSearch";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {<Route path="/" element={<Home />} />}
        {<Route path='/:id' element={<JobDetail />} />}
        {<Route path='/updatejob/:id' element={<JobUpdate />} />}
        {<Route path='/createjob' element={<JobCreate />} />}
        {<Route path='/searchjob' element={<JobSearch />} />}
      </Routes>
    </div>
  );
};
export default App;
