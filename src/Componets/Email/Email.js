import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import emailBg from "../../asset/images/banner-1.jpg";

function Email() {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>Sign up your newsletter below to get $100 off your first trip!</p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                height: "48px", @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
              `}
            >
              Sign Up
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  );
}

export default Email;

const EmailContainer = styled.div`
  background: url(${emailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem calc((100vw - 1300px) / 2);
`;
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: clamp(1rem, 5vw, 3rem);
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  form {
    z-index: 10;
  }
`;
const FormWrap = styled.div`
  input {
    width: 350px;
    height: 48px;
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 50px;
    margin-right: 1rem;
  }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;

      input {
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
      }
    }
`;
