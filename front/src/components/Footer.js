import React from "react"
import styled from 'styled-components'


export default function Footer() {
    return (
        <Wrap>
            <Container>
                <Copyright>(C)Yahoo Japan Corporation. All Rights Reserved.</Copyright>
            </Container>
        </Wrap>
    )
}

const Copyright = styled.p`
    
`

const Wrap = styled.div`
    width:100%;
    height:128px;
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