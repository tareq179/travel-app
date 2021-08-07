import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData';
import { Button } from '../../Button';


function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <Nav>
            <Navlink>
                Travel
            </Navlink>
            <Bars onClick={handleClick}>
                <i className={click ?"fas fa-times": "fas fa-bars"}></i>
            </Bars>
            <NavMenu>
                {
                    menuData.map((item, index) => (
                        <Navlink to={item.link} key={index}>
                                {item.title}
                        </Navlink>
                    ))
                }
            </NavMenu>
            <NavBtn>
                <Button primary="ture" round="ture" to="/trips">Book a Flight</Button>
            </NavBtn>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    background-color: transparent;
    height: 80px;
    justify-content: space-between;
    display: flex;
    padding: 0.5rem calc((100vw-1300px)/2);
    z-index: 100;
    position: relative;
`
const Navlink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;
`
const Bars = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        font-size: 1.8rem;
        cursor: pointer;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
    }
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -40px;
    
    @media screen and (max-width: 760px){
        display: none;
    }
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width:760px){
        display: none;
    }
`