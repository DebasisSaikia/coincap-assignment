import React from 'react'
import styled from 'styled-components';
import Navbar from '../navbar';
import style from './layoutStyle';

const LayoutWrapper = styled.div`
    ${style}
`;

const Layout = ({children}) => {
    return (
        <LayoutWrapper>
            <Navbar/>
            {children}
        </LayoutWrapper>
    )
}

export default Layout
