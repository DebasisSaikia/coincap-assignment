import { css } from "styled-components";

const style = () => css`
  .navbar {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
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
  .nav_left,.nav_right{
        display: flex;
        align-items: center;
        gap: 2rem;

        svg{
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
    &:hover{
        transform: translateY(-2px);
        transition: all 0.3s ease-in;
    }
  }
`;

export default style;
