import classes from './Hero.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.contact}>
          <Link href="/BasicEnquire">
            <button className={classes.loginButton}>Enquire Now</button>
          </Link>

          <Link href="tel:9982478517">
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
        </div>
        <div className={classes.heroText}>
          <h1>Raj Packers And Movers</h1>
          <p>
            Simplify Your Relocation Journey with Our Trusted Packers and Movers: Effortless Moving
            Solutions for a Smooth Transition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
