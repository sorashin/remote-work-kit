import React from "react"
import styled from 'styled-components'
import logo from '../images/logo.png'

export default function Header({ children }) {
    return (
        <Wrap>
            <Container>
                <Logo><img src={logo} alt='logo'/></Logo>
                <Hint>初めての方へ</Hint>
            </Container>
        </Wrap>
    )
}

const Wrap = styled.div`
    position:fixed;
    width:100%;
    height:56px;
    background:#ffffff;
    border-bottom:solid 1px #eeeeee;
`

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    height:100%;
    max-width:960px;
    margin:0 auto;
`
const Logo = styled.a`
    img{
        height:100%;
        width:auto;
    }
`

const Hint = styled.a`
    
`