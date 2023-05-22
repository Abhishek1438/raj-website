'use client';

import React, { useEffect, useState, useContext } from 'react';
import classes from './Navbar.module.css';
import Logo from './Logo';
import Link from 'next/link';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function addOrRemove(array, value) {
  var index = array.indexOf(value);

  var newArray = [];

  array.forEach((element) => {
    newArray.push(element);
  });

  if (index === -1) {
    newArray.push(value);
  } else {
    newArray.splice(index, 1);
  }

  return newArray;
}

const Navbar = () => {
  const [hamburgerClasses, setHamburgerClasses] = useState([classes.hamburger]);
  const [navLinksClasses, setNavLinksClasses] = useState([classes.navLinks]);
  const [linksClasses, setLinksClasses] = useState([]);

  const hamburgerClicked = () => {
    setNavLinksClasses((old) => addOrRemove(old, classes.open));

    setLinksClasses((old) => addOrRemove(old, classes.fade));

    setHamburgerClasses((old) => addOrRemove(old, classes.toggle));
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={hamburgerClasses.join(' ')} onClick={hamburgerClicked}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
      <ul className={navLinksClasses.join(' ')}>
        <li className={linksClasses.join(' ')}>
          <a href="/">Home</a>
        </li>
        <li className={linksClasses.join(' ')}>
          <a href="/compose">Services</a>
        </li>
        <li className={linksClasses.join(' ')}>
          <a href="/blogs">Process</a>
        </li>
        <li className={linksClasses.join(' ')}>
          <a href="/contact">Contact Us</a>
        </li>

        <li className={linksClasses.join(' ')}>
          <Link href="/enquire">
            <button className={classes.loginButton}>Enquire Now</button>
          </Link>
        </li>

        <li className={linksClasses.join(' ')}>
          <Link href="tel:9983478517">
            <button className={classes.joinButton}>
              <lord-icon
                src="https://cdn.lordicon.com/tftaqjwp.json"
                trigger="loop"
                colors="primary:#121331"
                style={{ width: '25px', height: '25px' }}
              ></lord-icon>
              9982478517
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
