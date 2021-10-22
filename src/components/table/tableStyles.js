import { css } from "styled-components";

const style = () => css`
  width: 75%;
  margin: 0 auto;
  position: relative;
  top: -130px;

  .table_container {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    border-radius: 4px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border-radius: 4px;
  }
  .view_more {
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
    background: rgb(24, 198, 131) !important;
    outline: none;
    border: none;
    padding: 6px 10px;
    width: 110px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
  }

  td,
  th {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding-left: 1rem;
  }
  thead,
  th {
    padding: 12px;
    padding-left: 1rem;
    font-size: 14px !important;
    color: gray;
    font-weight: 400;
  }
  tr {
    &:hover {
      background-color: #eeeeee;
      transition: all 0.2s ease-in;
      cursor: pointer;
    }
  }
  .button_container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  .column2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      height: 30px;
    }
    span {
      display: flex;
      flex-direction: column;
      padding-top: 0.5rem;
      text-transform: capitalize;

      p{
        font-size: 12px;
        color: gray;
      }
    }
  }
`;

export default style;
