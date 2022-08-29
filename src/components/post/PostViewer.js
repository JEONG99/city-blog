import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import { getPost, removePost, unloadPost } from "../../modules/postSlice";
import { setOriginalPost } from "../../modules/writeSlice";
import { ImageBlock } from "../common/ImageBlock";
import Responsive from "../common/Responsive";
import Tags from "../common/Tags";
import ExtendImageModal from "./ExtendImageModal";
import PostHeader from "./PostHeader";

const PostViewerBlock = styled(Responsive)`
  margin-top: 64px;
`;

const PostTitle = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 48px;
  margin-bottom: 48px;
  h1 {
    font-size: 48px;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 18px;
  color: ${palette.gray[9]};
`;

const ImageBlockWrapper = styled.div`
  width: 100%;
  padding-bottom: 48px;
`;

const StyledImageBlock = styled(ImageBlock)`
  cursor: pointer;
`;

const PostViewer = () => {
  const navigate = useNavigate();
  const imageModal = useRef();
  const [modal, setModal] = useState(false);
  const { city, postId } = useParams();
  const dispatch = useDispatch();
  const { id, name, description, tags, image } = useSelector(({ post }) => ({
    id: post.id,
    name: post.name,
    description: post.description,
    tags: post.tags,
    image: post.image
      ? post.image
      : "http://contest.wowtv.co.kr/src/images/noImg.gif",
  }));

  const onExtendImageClick = () => {
    setModal(true);
  };
  const handleCloseModal = useCallback(
    (e) => {
      if (
        modal &&
        (!imageModal.current || !imageModal.current.contains(e.target))
      ) {
        setModal(false);
      }
    },
    [modal]
  );

  const onEdit = useCallback(() => {
    dispatch(setOriginalPost({ id, name, description, tags, image }));
    navigate(`/${city}/write`);
  }, [dispatch, navigate, name, description, tags, image, id, city]);

  const onRemove = useCallback(() => {
    dispatch(removePost({ city, postId: id }));
    navigate(`/${city}`);
  }, [dispatch, navigate, city, id]);

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [handleCloseModal]);

  useEffect(() => {
    dispatch(getPost({ city, postId }));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, city, postId]);

  return (
    <>
      <PostHeader city={city} onEdit={onEdit} onRemove={onRemove} />
      <PostViewerBlock>
        <PostTitle>
          <h1>{name}</h1>
          <Tags tags={tags} />
        </PostTitle>
        <ImageBlockWrapper>
          <StyledImageBlock onClick={onExtendImageClick}>
            <img src={image} alt="preview" />
          </StyledImageBlock>
        </ImageBlockWrapper>
        <ExtendImageModal
          modalRef={imageModal}
          visible={modal}
          imageSrc={image}
        />
        <PostContent>{description}</PostContent>
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;
