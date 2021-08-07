import React from "react";
import styled from "styled-components";
import { testimonialPhoto } from "../../data/tripsData";

function Testimonials() {
  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
          <i
              class="fa fa-check-circle"
              style={{
                color: "#3fffa8",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            ></i>
            <h3>Md Ripon</h3>
            <p>
              "The greatest experience of my life .It was so much fun exploring
              the mountains and they made it super easy to book my trip and
              accommodation."
            </p>
          </Testimonial>
          <Testimonial>
            <i
              class="fa fa-lightbulb"
              style={{
                color: "#3fffa8",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            ></i>
            <h3>Naime</h3>
            <p>
              "The greatest experience of my life .It was so much fun exploring
              the mountains and they made it super easy to book my trip and
              accommodation."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {testimonialPhoto.map((item, index) => (
            <Image key={index}>
              <img src={item.img} alt={item.alt} />
            </Image>
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  );
}

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`;
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`;
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Image = styled.div`
  width: 100%;
  border-radius: 10px;

  img {
    height: 500px;
    max-width: 100%;
    border-radius: 10px;
  }
`;
