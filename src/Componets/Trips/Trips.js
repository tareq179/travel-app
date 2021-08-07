import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { tripsData } from "../../data/tripsData";

function Trips() {
  return (
    <ProductContainer>
      <ProductHeading>Our Favorite Destinations</ProductHeading>
      <ProductWrapper>
        {tripsData.map((item, index) => (
          <ProductCard key={index}>
            <ProductImg src={item.img} alt={item.alt} />
            <ProductInfo>
              <TextWrap>
                <ProductTitle>
                  <i className="fa fa-map-marker-alt" style={{marginRight:"5px"}}></i>
                  {item.name}
                </ProductTitle>
              </TextWrap>
              <Button
                to="/trips"
                primary="ture"
                round="ture"
                style={{
                    position: "absolute",
                  top: "420px",
                  fontSize: "14px",
                }}
              >
                {item.button}
              </Button>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductContainer>
  );
}

export default Trips;

const ProductContainer = styled.div`
  min-height: 100vh;
  padding: calc(5rem);

  @media screen and (max-width: 868px) {
    padding: calc(1rem);
  }
`;
const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transform: 0.2s ease;
`;
const ProductImg = styled.img`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  color: #fff;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
