import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import  styled from 'styled-components'

const Container = styled.div` 
width : 100%;
height : 100vh;
display : flex;
background-color : coral;
position : relative;
overflow : hidden ;
`
const Arrow = styled.div`
width : 50px;
height : 50px;
background-color : white;
border-radius : 50%;
display : flex;
align-items : center;
justify-content : center;
position : absolute;
top : 0;
bottom : 0;
left : ${props=> props.direction === "left" && "10px"};
right : ${props=> props.direction === "right" && "10px"};
margin : auto;
cursor : pointer;
opacity : 0.5;
z-index : 2;
`
const Wrapper = styled.div`
height=100%;
display : flex;
transition : all 1.5s ease;
transform : translateX(${props=>props.slideIndex * -100}vw)
`
const Slide= styled.div`
display : flex;
align-items : center;
width : 100vw;
height : 100vh;
`
const ImgContainer = styled.div`
height : 100%;
flex=1;
`
const Image = styled.img`
height : 80%;
`
const InfoContainer = styled.div`
flex=1;
padding : 50px;
`
const Title = styled.h1`
font-size : 70px; 
`
const Desc = styled.p`
margin : 50px 0px;
font-size: 20px;
font-weight : 500;
letter-spacing : 3px;
`
const Button = styled.button`
padding : 10px;
font-size : 20px;
background-color : transparent:  
cursor : pointer;
`
const Slider = () => {
    const [slideIndex , setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };
  return (
    <Container> 
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}> 
            <Slide>
            <ImgContainer>
            <Image src="https://pixabay.com/illustrations/laptop-user-arrow-cloud-3706810/"/>
            </ImgContainer>
            <InfoContainer> 
                <Title>summer sale </Title>
                <Desc> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, at architecto aliquam autem, fugiat eligendi dolore omnis distinctio blanditiis quaerat voluptate quos atque quam repudiandae molestias quia doloremque animi mollitia. </Desc>
                <Button> shop now </Button>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
            <Image src="https://pixabay.com/illustrations/laptop-user-arrow-cloud-3706810/"/>
            </ImgContainer>
            <InfoContainer> 
                <Title>summer s2 </Title>
                <Desc> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, at architecto aliquam autem, fugiat eligendi dolore omnis distinctio blanditiis quaerat voluptate quos atque quam repudiandae molestias quia doloremque animi mollitia. </Desc>
                <Button> shop now </Button>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
            <Image src="https://pixabay.com/illustrations/laptop-user-arrow-cloud-3706810/"/>
            </ImgContainer>
            <InfoContainer> 
                <Title>summer s3</Title>
                <Desc> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, at architecto aliquam autem, fugiat eligendi dolore omnis distinctio blanditiis quaerat voluptate quos atque quam repudiandae molestias quia doloremque animi mollitia. </Desc>
                <Button> shop now </Button>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
            <Image src="https://pixabay.com/illustrations/laptop-user-arrow-cloud-3706810/"/>
            </ImgContainer>
            <InfoContainer> 
                <Title>summer s4 </Title>
                <Desc> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, at architecto aliquam autem, fugiat eligendi dolore omnis distinctio blanditiis quaerat voluptate quos atque quam repudiandae molestias quia doloremque animi mollitia. </Desc>
                <Button> shop now </Button>
            </InfoContainer>
            </Slide>

        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined> </ArrowRightOutlined>
        </Arrow>

    </Container>
  )
}

export default Slider;