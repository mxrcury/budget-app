import styled from 'styled-components'

export const PlusButton = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    font-size:35px;
    color: gray;
    border-radius:100%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-justify: auto;
    border: 3px solid gray;
    outline: 0;
    background: white;
    /* width: 50px;
    height: 50px; */
    &:hover{
        cursor: pointer;
    }
`

PlusButton.displayName = 'PlusButton'