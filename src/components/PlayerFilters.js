import React, { Component } from 'react'
import styled from 'styled-components';
import { theme } from '../theme/theme';

class PlayerFilters extends Component {
    render() {
        return (
            <Filters>
                <FilterButton borderRadius={'30px 0 0 30px'}>Risers</FilterButton>
                <FilterButton active>All</FilterButton>
                <FilterButton borderRadius={'0 30px 30px 0'}>Fallers</FilterButton>

            </Filters>
        )
    }
}

const Filters = styled.div`
    display:flex;
    justify-content: center;
`

const FilterButton = styled.button`
    border: 1px solid ${theme.purple};
    padding: 15px 25px;
    border-radius: ${props => props.borderRadius};
    background: ${props => props.active ? theme.purple : 'white'};
    color: ${props => props.active ? 'white' : theme.purple};
    font-weight: bold;
`

export default PlayerFilters;

