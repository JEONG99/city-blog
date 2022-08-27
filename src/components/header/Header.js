import { NavLink as ReactRouterDomNavLink } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/style/palette";

const NavLink = ({ isActive, children, ...props }) => {
  return <ReactRouterDomNavLink {...props}>{children}</ReactRouterDomNavLink>;
};

const HeaderBlock = styled.ul`
  width: 100%;
  display: table;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    width: 20%;
    display: table-cell;
  }
`;

const CityItem = styled(NavLink)`
  width: 100%;
  display: block;
  height: 44px;
  border-bottom: 1px solid ${palette.gray[3]};
  line-height: 42px;
  color: ${palette.gray[8]};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  &.active {
    height: 42px;
    border-bottom: 3px solid ${palette.cyan[7]};
    color: ${palette.cyan[7]};
    font-weight: 700;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <li>
        <CityItem to="/turkey">터키</CityItem>
      </li>
      <li>
        <CityItem to="/italia">이탈리아</CityItem>
      </li>
      <li>
        <CityItem to="/spain">스페인</CityItem>
      </li>
      <li>
        <CityItem to="/japan">일본</CityItem>
      </li>
      <li>
        <CityItem to="/thailand">태국</CityItem>
      </li>
    </HeaderBlock>
  );
};

export default Header;
