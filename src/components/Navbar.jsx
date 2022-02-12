import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';
const Container = styled.div`
height: 60px;
background-color : white;
`;
const Wrapper = styled.div`
padding : 10px 20px;
display : flex;
justify-content : space-between;
align-items : center;
`;
const Input = styled.input`
border : none;
`
const Language = styled.span`
 font-size : 14px;
 curson : pointer;
`
const Logo = styled.h1`
font-weight : bold;
`
const SearchContainer = styled.div`
border : 1px solid lightgray ;
display : flex;
align-items : center;
margin-left : 25px;
padding : 5px;
`
const Left = styled.div`
width : 33.3%;
display : flex;
align-items : center;
`
const Center = styled.div`
width : 33.3%;
text-align :  center;
`
const Right = styled.div`
width : 33.3%;
display : flex;
align-items : center;
justify-content : flex-end;
`
const MenuItem = styled.div`
font-size : 14px ;
cursor : pointer;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Language>EN</Language></Left>
                <SearchContainer>
                    <Input ></Input>
                    <Search style={{color:"gray", fontSize: 16}}> </Search>
                </SearchContainer>
                <Center> <Logo>ECOM</Logo> </Center>
                <Right> 
                    <MenuItem> Register </MenuItem>
                    <MenuItem> Sign in  </MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined> </ShoppingCartOutlined>
                         </Badge>
                    </MenuItem>
                      </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar