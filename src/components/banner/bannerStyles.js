import { css } from "styled-components";

const style = () => css`
  width: 100%;
  height: 220px;
  background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))
    rgb(255, 255, 255) !important;

  .banner_data {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    padding-top: 1rem;
    h3,h2{
        color: #fff;
    }
    h2{
        margin-top: -1rem;
        text-align: center;
    }
  }
`;

export default style;
