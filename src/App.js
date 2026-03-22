import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobListings from "./pages/JobListings";
import JobDetails from "./pages/JobDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<JobListings />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;