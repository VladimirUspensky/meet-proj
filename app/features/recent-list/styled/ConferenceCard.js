// @flow

import styled from 'styled-components';

export default styled.div`
    background: #1754A9;
    color: white;
    display: grid;
    grid-template-rows: repeat(1);
    grid-template-columns: 1fr auto;
    grid-auto-flow: column;
    font-size: 0.9em;
    padding: 0 4em;
    flex-direction: row;
    height: 63px;
    background: rgba(0, 40, 49, 0.3);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    
    &:hover {
        cursor: pointer;
    }
`;
