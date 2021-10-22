import { css } from "styled-components";

const style = () => css`
  width: 100%;
  height: 65px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
  .navbar {
    width: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    padding-top: 0.5rem;
  }
  img {
    height: 30px;
  }
  ul,
  li {
    list-style: none;
    font-size: 1rem;
    cursor: pointer;
  }
  .nav_left,
  .nav_right {
    display: flex;
    align-items: center;
    gap: 2rem;

    svg {
      font-size: 1.2rem;
    }
  }
  button {
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
    background: rgb(24, 198, 131) !important;
    outline: none;
    border: none;
    padding: 6px 10px;
    width: 140px;
    border-radius: 50px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    &:hover {
      transform: translateY(-2px);
      transition: all 0.3s ease-in;
    }
  }
`;

export default style;
