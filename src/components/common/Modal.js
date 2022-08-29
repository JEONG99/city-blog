import styled from "styled-components";

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ children, ...rest }) => {
  return <FullScreen {...rest}>{children}</FullScreen>;
};
export default Modal;
