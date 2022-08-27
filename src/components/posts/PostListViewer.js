import Responsive from "../common/Responsive";
import Header from "../header/Header";
import PostList from "./PostList";

const PostListViewer = () => {
  return (
    <Responsive>
      <Header />
      <PostList />
    </Responsive>
  );
};

export default PostListViewer;
