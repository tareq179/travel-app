import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
            <FooterDesc>
                    <h1>Explorix</h1>
                    <p>We strive to create the best experiences for our custome</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>
                        Contact US
                    </FooterLinkTitle>
                    <FooterLink to="about">Contact</FooterLink>
                    <FooterLink to="/">Support</FooterLink>
                    <FooterLink to="/">Destinations</FooterLink>
                    <FooterLink to="/">Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterWrapper>
            <FooterWrapper>
                <FooterLinkItems>
                        <FooterLinkTitle>
                            Videos
                        </FooterLinkTitle>
                        <FooterLink to="about">Submit Video</FooterLink>
                        <FooterLink to="/">Ambassadors</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to="about">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinkItems>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div `
    padding: 5rem calc((100vw - 1100px)/2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background-color: #fafafb;

`
const FooterWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px){
        grid-template-columns: 1fr;
    }
`
const FooterDesc = styled.div `
    padding: 1rem;

h1{
    margin-bottom: 3rem;
    color: #f26a2c;
}

`
const FooterLinkItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

`
const FooterLinkTitle = styled.h2 `
    font-size: 14px;
    margin-bottom: 16px;
`
const FooterLink = styled(Link) `
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color:#3d3d4c ;

    &:hover{
        color: #f26a2c;
        transition: 0.3ms ease-in-out;
    }
`
