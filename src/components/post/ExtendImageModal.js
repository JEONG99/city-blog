import styled from "styled-components";
import Modal from "../common/Modal";

const ExtendImageBlock = styled.div`
  width: 600px;
  height: 420px;
  border-radius: 16px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

const ExtendImageModal = ({ modalRef, visible, imageSrc }) => {
  if (!visible) return null;
  return (
    <Modal>
      <ExtendImageBlock ref={modalRef}>
        <img src={imageSrc} alt="img" />
      </ExtendImageBlock>
    </Modal>
  );
};

export default ExtendImageModal;
