import React from 'react';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Hero from 'public/images/hero.png';
import '@/app/globals.css';

const Home: React.FC = () => {
  return (
    <main className=" flex flex-col gap-8 items-center justify-center min-h-screen p-8 bg-gray-100 my-6">
      <div className="flex flex-col gap-4 text-center max-w-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 bg-gradient-to-b from-green-900 to-blue-400 bg-clip-text text-transparent">
          The Future of AI in the Next Few Years
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Turning Your Idea into Reality. We Bring Together Teams from the Global Tech Industry.
        </p>
      </div>
      <Button url="/portfolio" text="See Our Works"className="mt-4 transform -translate-y-1 transition-all duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 md:mt-6 md:text-lg lg:text-xl lg:mt-8 text-sm bg-green-500 text-white py-4 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500" />
      <div className="flex-1 mt-8 md:mt-12 flex items-center justify-center">
        <div className="relative w-full max-w-3xl">
          <Image
            className="object-cover rounded-md shadow-md animate-move duration-3000 infinite ease-in-out alternate"
            src={Hero}
            alt="Main picture"
            layout="responsive"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
