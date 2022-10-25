import styled from 'styled-components'

export const LinkItem = styled.span`
    a{
        color:${props=>props.theme.linkColor}
    }
    margin-left:10px;
`
export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
`