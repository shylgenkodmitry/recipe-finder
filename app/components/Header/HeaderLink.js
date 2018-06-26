import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: inline-flex;
  padding: 0.25em 0;
  margin: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #fff;

  &:active,
  &:hover {
    color: #fff;
  }

  &.selected {
    color: #eee;
  }
`;
