import { css } from "styled-components";

const style=()=>css`
    width: 100%;
    height: 250px;
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))
    rgb(255, 255, 255) !important;

    .footer_container{
        width: 75%;
        margin:0 auto ;
        height: 250px;
        display: flex;
        justify-content: space-between;
        color: white;
        padding-top: 2rem;
    }
    h3{
        color: #ffffff;
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: 1rem;
    }
    li{
        list-style: none;
        color: #ecf0f1;
        opacity: 0.6;
        &:hover{
            opacity: 1;
            transition: all 0.2s ease-in;
            cursor: pointer;
        }
    }
    img{
        margin-bottom: 0.5rem;
    }
    svg{
        font-size: 1.5rem;
        opacity: 0.7;
    }
`

export default style