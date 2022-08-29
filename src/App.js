import { Route, Routes } from "react-router-dom";
import "./App.css";
import Responsive from "./components/common/Responsive";
import Header from "./components/header/Header";
import PostViewer from "./components/post/PostViewer";
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
      <Route path="/:city/:postId" element={<PostViewer />} />
    </Routes>
  );
}

export default App;
