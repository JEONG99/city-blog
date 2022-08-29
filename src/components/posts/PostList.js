import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import { getPosts } from "../../modules/postsSlice";
import Button from "../common/Button";
import { ImageBlock } from "../common/ImageBlock";
import Tags from "../common/Tags";

const PostListBlock = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`;

const PostItemBlock = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  display: flex;
  align-items: center;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 32px;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 14px;
    margin-bottom: 0;
  }
`;

const StyledImageBlock = styled(ImageBlock)`
  margin: 0;
  margin-right: 16px;
`;

const ContentBlock = styled.div`
  flex: 1;
`;

const PostItem = ({ post, city }) => {
  const { id, name, description, tags, image } = post;

  return (
    <PostItemBlock>
      <StyledImageBlock>
        <img
          src={
            image ? image : "http://contest.wowtv.co.kr/src/images/noImg.gif"
          }
          alt={name}
        />
      </StyledImageBlock>
      <ContentBlock>
        <h2>
          <Link to={`/${city}/${id}`}>{name}</Link>
        </h2>
        <Tags tags={tags} />
        <p>{description}</p>
      </ContentBlock>
    </PostItemBlock>
  );
};

const PostList = () => {
  const { city } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ city }));
  }, [dispatch, city]);

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan to={`/${city}/write`}>
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      {posts &&
        posts.map((post) => <PostItem post={post} key={post.id} city={city} />)}
    </PostListBlock>
  );
};

export default PostList;
