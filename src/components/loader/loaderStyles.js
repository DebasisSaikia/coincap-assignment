import { css } from "styled-components";

const style = () => css`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    width: 100px;
    height: 100px;
    display: inline-block;
    padding: 0px;
    opacity: 0.5;
    border: 3px solid #e74c3c;
    -webkit-animation: loader 1s ease-in-out infinite alternate;
    animation: loader 1s ease-in-out infinite alternate;
  }
  .loader:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 3px solid #8e44ad;
  }
  .loader:after {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 3px solid #2c3e50;
  }

  @keyframes loader {
    from {
      transform: rotate(0deg) scale(1, 1);
      border-radius: 0px;
    }
    to {
      transform: rotate(360deg) scale(0, 0);
      border-radius: 50px;
    }
  }
  @-webkit-keyframes loader {
    from {
      -webkit-transform: rotate(0deg) scale(1, 1);
      border-radius: 0px;
    }
    to {
      -webkit-transform: rotate(360deg) scale(0, 0);
      border-radius: 50px;
    }
  }
`;

export default style;
