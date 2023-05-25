import classes from './Services.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faBuilding,
  faCarSide,
  faHouse,
  faTruckMoving,
  faWarehouse,
  faMapLocationDot,
  faCartFlatbedSuitcase,
  faBucket,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className={classes.services} id="services">
      <h3>Our Services</h3>
      <p className={classes.sectionLead}>
        Reliable and Professional Shifting Services: Streamlining Your Domestic and Commercial
        Transitions with Expertise and Care
      </p>
      <div className={classes.servicesGrid}>
        <div className={`${classes.service} ${classes.service1}`}>
          <FontAwesomeIcon icon={faBoxOpen} size="lg" />
          <h4>Domestic Shifting</h4>
          <p>
            This service involves the relocation of household or office items within the same
            country. It includes packing, transportation, and unpacking of belongings to ensure a
            smooth transition to the new location.
          </p>
          <Link href="#" className={classes.cta}>
            Read More <span className="ti-angle-right" />
          </Link>
        </div>

        <div className={`${classes.service} ${classes.service2}`}>
          <FontAwesomeIcon icon={faHouse} size="lg" />
          <h4>Household Shifting</h4>
          <p>
            This service is specifically tailored for individuals or families who are moving their
            entire household to a new place. It includes packing and moving of furniture,
            appliances, personal belongings, and other household items.
          </p>
          <Link href="#" className={classes.cta}>
            Read More <span className="ti-angle-right" />
          </Link>
        </div>

        <div className={`${classes.service} ${classes.service3}`}>
          <FontAwesomeIcon icon={faBuilding} size="lg" />
          <h4>Office Shifting</h4>
          <p>
            Office shifting service helps businesses relocate their office space to a new location.
            It involves the safe and efficient packing, transportation, and setup of office
            furniture, equipment, documents, and other assets to minimize downtime and ensure a
            seamless transition.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service1}`}>
          <FontAwesomeIcon icon={faCarSide} size="lg" />
          <h4>Car Shifting</h4>
          <p>
            Car shifting service is focused on transporting vehicles, such as cars or motorcycles,
            from one location to another. It includes specialized handling and transportation to
            ensure the safety and protection of the vehicle during the move.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service2}`}>
          <FontAwesomeIcon icon={faTruckMoving} size="lg" />
          <h4>Corporate Shifting</h4>
          <p>
            Corporate shifting service is designed for large-scale corporate relocations, involving
            the movement of entire offices or departments. It includes comprehensive planning,
            coordination, and execution of the move to minimize disruptions and ensure business
            continuity.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service3}`}>
          <FontAwesomeIcon icon={faMapLocationDot} size="lg" />
          <h4>Local Shifting</h4>
          <p>
            Local shifting service caters to individuals or businesses relocating within the same
            city or nearby areas. It includes efficient packing, transportation, and unpacking of
            belongings for a hassle-free local move.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service1}`}>
          <FontAwesomeIcon icon={faCartFlatbedSuitcase} size="lg" />
          <h4>Storage Shifting</h4>
          <p>
            This service is for individuals or businesses that require temporary or long-term
            storage solutions during the relocation process. It involves secure storage of
            belongings in a dedicated facility until they are ready to be delivered to the new
            location.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service2}`}>
          <FontAwesomeIcon icon={faBoxOpen} size="lg" />
          <h4>Parcel Shifting</h4>
          <p>
            Parcel shifting service focuses on the transportation of smaller items or parcels from
            one place to another. It provides a convenient and reliable solution for delivering
            packages or shipments within a specified timeframe.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service3}`}>
          <FontAwesomeIcon icon={faBuilding} size="lg" />
          <h4>Factory Relocation</h4>
          <p>
            Factory relocation service is aimed at businesses or industries that need to move their
            manufacturing facilities, machinery, and equipment to a new location. It involves
            careful planning, disassembly, transportation, and reinstallation of machinery to
            minimize downtime and ensure a smooth transition.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service1}`}>
          <FontAwesomeIcon icon={faWarehouse} size="lg" />
          <h4>Warehousing</h4>
          <p>
            Warehousing service offers storage and inventory management solutions for businesses
            that require secure storage facilities for their goods or products. It includes safe
            handling, storage, and tracking of inventory to meet the business's storage needs.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
        <div className={`${classes.service} ${classes.service2}`}>
          <FontAwesomeIcon icon={faBucket} size="lg" />
          <h4>Bulk/Commercial Movements</h4>
          <p>
            This service is designed for businesses that require large-scale or bulk transportation
            of goods, equipment, or inventory. It caters to commercial clients who need efficient
            logistics and transportation solutions for their commercial shipments.
          </p>
          <Link href="#" className={classes.cta}>
            Read more <span className="ti-angle-right"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
