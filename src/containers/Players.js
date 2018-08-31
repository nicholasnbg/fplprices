import React, { Component } from 'react';
import styled from 'styled-components';
import PlayerFilters from '../components/PlayerFilters'

class PlayersWapper extends Component {
    render() {
        return (
            <Players>
                <PlayerFilters />

            </Players>
        )
    }
}

const Players = styled.div`
    height: auto;
    padding: 50px 15%;
`

export default PlayersWapper;