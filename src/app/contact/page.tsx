import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Let's Keep in Touch</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 h-96 relative">
          <Image
            src="/images/contact.png"
            alt="Contact"
            width={600}
            height={400}
            objectFit="contain"
            className="animate-move"
          />
        </div>
        <form className="flex flex-1 flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            className="p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Message"
            rows={6}
          ></textarea>
          <Button
            url="#"
            text="Send"
            className="mt-4 transform -translate-y-1 transition-all duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 md:mt-6 md:text-lg lg:text-xl lg:mt-8 text-sm bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
