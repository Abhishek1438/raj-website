import classes from '../styles/enquire.module.css';

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
            <label for="companyName">Company Name</label>
            <input type="text" name="companyName" />
          </div>
          <div>
            <label for="designation">Designation</label>
            <input type="text" name="designation" />
          </div>
          <div></div>
          <div>
            <label for="address">Address</label>
            <input type="text" name="address" />
          </div>
          <div>
            <label for="city">City</label>
            <input type="text" name="city" />
          </div>

          <div>
            <label for="state">State</label>
            <input type="text" name="state" />
          </div>
          <div>
            <label for="from">Send From</label>
            <input type="text" name="from" required />
          </div>
          <div>
            <label for="to">Send To</label>
            <input type="text" name="to" required />
          </div>
          <div>
            <label for="date">Service Date</label>
            <input type="date" name="date" />
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
            <label for="type">Type of service</label>
            <select name="type" required>
              <option>Domestic Shifting</option>
              <option>Household Shifting</option>
              <option>Office Shifting</option>
              <option>Car Shifting</option>
              <option>Corporate Shifting</option>
              <option>Local Shifting</option>
              <option>Storage Shifting</option>
              <option>Parcel Shifting</option>
              <option>Fatory Relocation</option>
              <option>Warehousing</option>
              <option>Bulk//Commercial Movements</option>
            </select>
          </div>
          <div>
            <label for="details">Specify your Inquiry</label>
            <textarea name="details"></textarea>
          </div>
        </div>

        <div className={classes.serviceDetail}>
          <h2>Details of Service</h2>
        </div>
      </form>
    </div>
  );
};

export default Enquire;
