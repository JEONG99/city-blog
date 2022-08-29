import styled from "styled-components";
import Button from "../common/Button";
import Modal from "../common/Modal";

const AskModalBlock = styled.div`
  width: 320px;
  background: white;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 48px;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 32px;
  & + & {
    margin-left: 12px;
  }
`;

const AskRemoveModal = ({ visible, onCancel, onConfirm }) => {
  if (!visible) return null;
  return (
    <Modal>
      <AskModalBlock>
        <h2>포스트 삭제</h2>
        <p>포스트를 정말 삭제하시겠습니까?</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>취소</StyledButton>
          <StyledButton cyan onClick={onConfirm}>
            삭제
          </StyledButton>
        </div>
      </AskModalBlock>
    </Modal>
  );
};

export default AskRemoveModal;
