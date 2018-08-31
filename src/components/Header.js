import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme/theme'

export default () => {
    return (
        <Header>
            <Title>Fantasy PL Prices</Title>
        </Header>
    )
}

const Header = styled.header`
    height: 35vh;
    background-color: ${theme.green};
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 0 15%; 
`;

const Title = styled.h1`
    color: ${theme.purple};
    font-size: 4rem;
`
