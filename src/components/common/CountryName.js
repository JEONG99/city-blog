import styled from "styled-components";

const CountryNameBlock = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
  }
`;

const CountryName = ({ children, ...rest }) => {
  return <CountryNameBlock {...rest}>{children}</CountryNameBlock>;
};

export default CountryName;
