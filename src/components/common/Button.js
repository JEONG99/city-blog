import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/style/palette";

const buttonStyled = css`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 16px;
  color: white;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 12px;
      padding-bottom: 12px;
      width: 100%;
      font-size: 18px;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyled}
`;
const StyledLink = styled(Link)`
  ${buttonStyled}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};
export default Button;
