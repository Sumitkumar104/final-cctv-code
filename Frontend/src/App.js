import Uploadvideopage from "./components/Uploadvideopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Livepage from "./components/Livepage";
import Analysis from "./components/Analysis";
import Transcript from "./components/Transcript";
import Anomaly from "./components/Anomaly";
import History from "./components/History";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Uploadvideopage />} />
        <Route path="/Livepage" element={<Livepage />} />
        <Route path="/VideoUpload" element={<Uploadvideopage />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/anomaly" element={<Anomaly />} />
        <Route path="/history" element={<History/>} />

      </Routes>
    </BrowserRouter>
  );
}
