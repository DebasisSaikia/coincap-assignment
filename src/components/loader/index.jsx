import React from 'react'
import styled from "styled-components";
import style from "./loaderStyles";

const LoaderWrapper = styled.div`
  ${style}
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <div className="loader"/>
        </LoaderWrapper>
    )
}

export default Loader
