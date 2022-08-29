import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import AskRemoveModal from "./AskRemoveModal";

const PostHeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
    button + button {
      margin-left: 8px;
    }
  }
`;

const Spacer = styled.div`
  height: 64px;
`;

const PostHeader = ({ city, onEdit, onRemove }) => {
  const [removeModal, setRemoveModal] = useState(false);

  const onRemoveClick = useCallback(() => {
    setRemoveModal(true);
  }, []);
  const onCancel = useCallback(() => {
    setRemoveModal(false);
  }, []);
  const onConfirm = useCallback(() => {
    setRemoveModal(false);
    onRemove();
  }, [onRemove]);

  return (
    <>
      <PostHeaderBlock>
        <Wrapper>
          <Link to={`/${city}`} className="logo">
            {city.toUpperCase()}
          </Link>
          <div className="right">
            <Button cyan onClick={onEdit}>
              수정
            </Button>
            <Button onClick={onRemoveClick}>삭제</Button>
          </div>
        </Wrapper>
      </PostHeaderBlock>
      <Spacer />
      <AskRemoveModal
        visible={removeModal}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default PostHeader;
