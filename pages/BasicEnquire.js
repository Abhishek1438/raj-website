import classes from '../styles/enquire.module.css';
import Link from 'next/link';
import { useState, Fragment } from 'react';
import { Dialog } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

const Enquire = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    details: '',
  });

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(formData);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success
        setIsOpen(true);
        setIsLoading(false);
        console.log('POST request sent successfully');
      } else {
        // Error
        console.error('Error sending POST request');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={classes.enquire}>
      <form onSubmit={handleSubmit}>
        <div className={classes.enquireDetail}>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div>
            <label for="address">Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>

          <div>
            <label for="phone">Mob No.</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="email">E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div>
            <label for="details">Message</label>
            <textarea
              name="details"
              placeholder="Enter your Message"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className={classes.getACall} type="submit">
            {!isLoading && 'Get A Call'}
            {isLoading && <Loader />}
          </button>
          {/* <Link href="/Enquire" className={classes.fullEnquiryContainer}>
            <button className={classes.fullEnquiry}>Full Online Enquiry</button>
          </Link> */}
        </div>
      </form>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white text-black p-6 flex  flex-col justify-center ">
              <Dialog.Title className="font-bold text-xl ">
                We have received your request
              </Dialog.Title>
              <Dialog.Description className="py-2 text-lg ">
                We will call you soon
              </Dialog.Description>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto"
                onClick={() => {
                  setIsOpen(false);
                  router.push('/');
                }}
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Enquire;
