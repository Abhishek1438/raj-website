import classes from './Process.module.css';
import Image from 'next/image';
import packingImg from '../assets/packing-material-icon.png';
import packingTips from '../assets/packing-tips-icon.png';
import transportTips from '../assets/transport-process-icon2.png';

const Process = () => {
  return (
    <section id="process" className={classes.process}>
      <div>
        <div>
          <h2>
            Process <span className="main-color"></span>
          </h2>
        </div>

        <div className={classes.container}>
          <div className={classes.childContainer}>
            <div className={classes.displayFlex}>
              <h3>Packing Material </h3>

              <div className={classes.image}>
                <Image src={packingImg} />
              </div>
            </div>
            <p>
              The most essential thing to keep in mind while moving or relocating to a new place is
              to create a good packing list. Without this, there is a good chance of the goods
              getting damaged..
            </p>
          </div>

          <div className={classes.childContainer}>
            <div className={classes.displayFlex}>
              <h3>Packing Tips </h3>
              <div className={classes.image}>
                <Image src={packingTips} />
              </div>
            </div>
            <p>
              While packing fragile items, make sure you mention “FRAGILE” on the box. When you are
              packing lampshades, make sure you only place two or three per box..
            </p>
          </div>

          <div className={classes.childContainer}>
            <div className={classes.displayFlex}>
              <h3>Transportation Process </h3>
              <div className={classes.image}>
                <Image src={transportTips} />
              </div>
            </div>
            <p>
              Through the years, we have created a transportation flow that ensures that the goods
              that we transport reach the destination safely and on time....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
