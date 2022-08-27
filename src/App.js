import { Route, Routes } from "react-router-dom";
import "./App.css";
import Responsive from "./components/common/Responsive";
import Header from "./components/header/Header";
import PostListViewer from "./components/posts/PostListViewer";
import WriteViewer from "./components/write/WriteViewer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Responsive>
            <Header />
          </Responsive>
        }
      />
      <Route path="/:city" element={<PostListViewer />} />
      <Route path="/:city/write" element={<WriteViewer />} />
    </Routes>
  );
}

export default App;
