import classes from './Footer.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.aboutUs}>
        <h2>About Us</h2>
        <Logo />
        <p>
          Welcome to XYZ Packers and Movers! We are a premier moving company dedicated to providing
          efficient and reliable relocation services. Whether you're moving locally or
          internationally, we have the expertise and resources to make your move a stress-free
          experience. Our website is designed to offer a seamless and user-friendly interface,
          allowing you to access all the information and services you need in one place.
        </p>
      </div>
      <div className={classes.services}>
        <h2>Services</h2>
        <div>
          <Link href="#">Domestic Shifting</Link>
          <Link href="#">Household Shifting</Link>
          <Link href="#">Office Shifting</Link>
          <Link href="#">Car Shifting</Link>
          <Link href="#">Corporate Shifting</Link>
          <Link href="#">Local Shifting</Link>
          <Link href="#">Storage Shifting</Link>
          <Link href="#">Bulk/Commercial Movements</Link>
          <Link href="#">Parcel Services</Link>
          <Link href="#">Factory Relocation</Link>
          <Link href="#">Warehousing</Link>
        </div>
      </div>
      <div className={classes.contactUs}>
        <h2>Contact Us</h2>
        <div className={classes.directContactContainer}>
          <ul className={classes.contactList}>
            <li className={classes.listItem}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span className={`${classes.contactText} ${classes.place}`}>Chirawa, Rajasthan</span>
            </li>

            <li className={classes.listItem}>
              <FontAwesomeIcon icon={faPhone} size="sm" />
              <span className={`${classes.contactText} ${classes.phone}`}>
                <a href="9660392551" title="Give me a call">
                  9660392551
                </a>
              </span>
            </li>

            <li className={classes.listItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className={`${classes.contactText} ${classes.gmail}`}>
                <a
                  href="mailto:abhishekverma1438%40gmail.com"
                  target="_blank"
                  title="Send me an email"
                >
                  abhishekverma1438@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
