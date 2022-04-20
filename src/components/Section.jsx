import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Section = ({title, description, backgroundImg, leftBtnText, rightBtnText}) => {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
          <ItemText>
              <h1>{ title }</h1>
              <p>{ description }</p>
          </ItemText>
        </Fade>

        <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {
                    rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                }
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const ItemText = styled.div`
    margin-top: 10rem;
    text-align: center;

    h1 {
        font-size: 34px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`

const LeftButton = styled.button`
    background-color: rgba(23, 26, 32, 0.8);
    width: 256px;
    height: 50px;
    color: #fff;
    text-align: center;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 20px;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    outline: none;
`

const RightButton = styled.button`
    background-color: #fff;
    width: 256px;
    height: 50px;
    color: #000;
    text-align: center;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 20px;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    outline: none;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animationDown infinite 1.5s;
`


export default Section