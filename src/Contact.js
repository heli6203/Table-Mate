import emailjs from '@emailjs/browser';
import {useRef} from "react";
import './Contact.css';
import Hello from './Images/Hello.png';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_gd97fe3', 'template_yzacjl4', form.current, 'gomascA4mroy_JQlW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      e.taget.reset()
  };

  return (
    <div class="justify-center ">
      <form className="form1">
        <div class="justify-center px-2.5  ">
      <form class="h-96 w-96 border-2 boder-black ">
          <img class="h-36 ml-28 mt-10  " src={Hello}/> 

      </form>
      </div>
      <div>
    <form ref={form} class="h-96 w-96"  onSubmit={sendEmail} >
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Full Name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input type="message" placeholder="message" required />
      </div>
      <button type="submit">submit</button>
    </form>
    </div>
    </form>
    </div>
  );
};

export default Contact;
