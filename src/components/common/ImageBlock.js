import styled from "styled-components";
import palette from "../../lib/style/palette";

const ImagePreviewBlock = styled.div`
  width: 200px !important;
  height: 140px;
  margin-top: 16px;
  border-radius: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    border: 1px solid ${palette.gray[4]};
  }
`;
export const ImageBlock = ({ children, ...rest }) => {
  return <ImagePreviewBlock {...rest}>{children}</ImagePreviewBlock>;
};
