import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section
          title="Model S"
          description="Order Online for Touches Delivered"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
         />
        <Section
          title="Model Y"
          description="Order Online for Touches Delivered"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
         />

        <Section
          title="Model 3"
          description="Order Online for Touches Delivered"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
         />

        <Section
          title="Model X"
          description="Order Online for Touches Delivered"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
         />

        <Section
          title="Lowest Cost Solar panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
         />

        <Section
          title="Solar for New Roofs"
          description="Solar Proof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
         />

        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"

         />
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`

export default Home