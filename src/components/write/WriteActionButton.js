import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { writePost } from "../../modules/writeSlice";
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
  const { name, description, image, tags } = useSelector(({ write }) => ({
    name: write.name,
    description: write.description,
    image: write.image,
    tags: write.tags,
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
    dispatch(writePost({ city, newPost }));
    navigate(-1);
  };

  const onCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <WriteActionButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
      {error && <ErrorMessage>도시 이름을 입력해주세요 !</ErrorMessage>}
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
