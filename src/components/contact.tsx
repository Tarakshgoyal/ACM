import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './form';
import StarsCanvas from "./preloder";

function Contact() {
  return (
    <>
      
      <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
        <StarsCanvas />
        <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Form />
          </div>
          {/* <div className="w-full md:w-1/2">
            <LocationMap />
          </div> */}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={5000}
      />
    </>
  );
}

export default Contact;