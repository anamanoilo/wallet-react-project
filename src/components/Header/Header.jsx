import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IconContext } from "react-icons";
import { FaUser } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5'
import authSelectors from 'redux/session/session-selectors';
import Container from "components/Container";
import  {Logo}  from 'components/Icon/Logo';
import s from './Header.module.scss'

const Header = () => {
  const name = useSelector(authSelectors.getUsername);
  return (
    <header className={s.header}>
      <Container>
        <Link to='/home'  className={s.link}>
          <Logo svg={s.svg} />
          <p className={s.link__title}>Wallet</p>
        </Link>
        <div className={s.name}>
          <IconContext.Provider value={{ color: "rgba(189, 189, 189, 1)", className: "global-class-name", size: "24px" }}>
            <FaUser />
            {/* <span className={s.name__text}>{name}</span> */}
            <span className={s.name__text}>Andrey</span>
          </IconContext.Provider>
        </div>
        <div className={s.logout}>
          <IconContext.Provider value={{ color: "rgba(189, 189, 189, 1)", className: "global-class-name", size: "24px" }}>
          <button className={s.logout__button}>
            <IoExitOutline />
              <span className={s.logout__text}>Выйти</span>
        </button>
          </IconContext.Provider>
        </div>
        
      </Container>
    </header>
  );
};
export default Header;
