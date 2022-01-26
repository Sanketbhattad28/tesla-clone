import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/carrSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [close, setClose] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu>
          <img
            onClick={() => setClose(true)}
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
            alt="img"
          />
        </CustomMenu>
        <BurgerNav show={close}>
          <Close>
            <img
              onClick={() => setClose(false)}
              src="https://img.icons8.com/ios-filled/100/000000/delete-sign--v1.png"
              alt="img"
            />
          </Close>
          {cars &&
            cars.map((car, index) => (
              <li key={index}>
                <a href="">{car}</a>
              </li>
            ))}
          <li>
            <a href="">Existing Inventory</a>
          </li>
          <li>
            <a href="">Use Inventory</a>
          </li>
          <li>
            <a href="">Trade-in</a>
          </li>
          <li>
            <a href="">Cybertruck</a>
          </li>
          <li>
            <a href="">Roadaster</a>
          </li>
          <li>
            <a href="">Semi</a>
          </li>
          <li>
            <a href="">Charging</a>
          </li>
          <li>
            <a href="">Powerwall</a>
          </li>
          <li>
            <a href="">Commercial energy</a>
          </li>
          <li>
            <a href="">Utilities</a>
          </li>
          <li>
            <a href="">Test Drives</a>
          </li>
          <li>
            <a href="">Find Us</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </BurgerNav>
      </RightMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  padding-left: 50px !important;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 10px 0;

    a {
      font-weight: 600;
    }
  }
  img {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding-top: 10px;
`;
