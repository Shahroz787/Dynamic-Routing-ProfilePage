import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profiles from "./pages/Profiles";
import ProfileDetails from "./pages/ProfileDetails";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post/>}/>
        <Route path="/Profiles">
          <Route index element={<Profiles />} />
          <Route path=":name" element={<ProfileDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
