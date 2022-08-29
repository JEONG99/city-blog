import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updatePost, writePost } from "../../modules/writeSlice";
import Button from "../common/Button";

const WriteActionButtonBlock = styled.div`
  margin-top: 16px;
  margin-bottom: 48px;
  button + button {
    margin-left: 8px;
  }
`;

const StyledButton = styled(Button)`
  height: 34px;
  & + & {
    margin-left: 8px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 12px;
  margin-left: 4px;
`;

const WriteActionButton = ({ city }) => {
  const [error, setError] = useState(false);
  const { originalPostId, name, description, image, tags, post, postError } =
    useSelector(({ write }) => ({
      originalPostId: write.id,
      name: write.name,
      description: write.description,
      image: write.image,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPublish = () => {
    if (!name) {
      setError(true);
      return;
    }
    const newDesc = description.replace(/<[^>]*>?/g, "");
    const newPost = {
      name,
      description: newDesc,
      image,
      tags,
    };
    if (originalPostId) {
      dispatch(updatePost({ city, originalPostId, newPost }));
      return;
    }
    dispatch(writePost({ city, newPost }));
  };

  const onCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    if (post) {
      const { id } = post;
      navigate(`/${city}/${id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError, navigate, city]);

  return (
    <WriteActionButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 {originalPostId ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
      {error && <ErrorMessage>도시 이름을 입력해주세요 !</ErrorMessage>}
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
