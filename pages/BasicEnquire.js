import classes from '../styles/enquire.module.css';
import Link from 'next/link';

const Enquire = () => {
  return (
    <div className={classes.enquire}>
      <form>
        <div className={classes.enquireDetail}>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" required />
          </div>

          <div>
            <label for="address">Address</label>
            <input type="text" name="address" />
          </div>

          <div>
            <label for="phone">Mob No.</label>
            <input type="text" name="phone" required />
          </div>
          <div>
            <label for="email">E-mail</label>
            <input type="email" name="email" />
          </div>

          <div>
            <label for="details">Message</label>
            <textarea name="details" placeholder="Enter your Message"></textarea>
          </div>

          <button className={classes.getACall}>Get A Call</button>
          <Link href="/Enquire" className={classes.fullEnquiryContainer}>
            <button className={classes.fullEnquiry}>Full Online Enquiry</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Enquire;
