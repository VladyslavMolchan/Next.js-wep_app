import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { items } from './data';

interface Item {
  id: number;
  title: string;
  desc: string;
  image: string;
}

interface CategoryProps {
  params: {
    category: string;
  };
}

const getData = (cat: string): Item[] | undefined => {
  return items[cat];
};

const Category: React.FC<CategoryProps> = ({ params }) => {
  const data = getData(params.category);

  if (!data) {
    console.error("Data not found for category:", params.category);
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-center text-green-400 text-3xl mb-4">Category not found</h1>
        <div className="w-full h-64 md:w-96 md:h-72 lg:w-112 lg:h-96 relative">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src="/images/notFound.jpg"
            alt="Category not found"
            layout="fill"
          />
        </div>
      </div>
    );
  }
  
  return (
    <div className="px-4 py-6 bg-gray-100 my-6">
      <h1 className="text-2xl font-semibold mb-4 bg-green-500">{params.category}</h1>

      {data.map((item, index) => (
        <div
          className={`flex flex-col md:flex-row gap-4 mt-6 mb-12 items-center text-green-500 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } animate-fade-in`}
          key={item.id}
        >
          <div className="flex-1 md:w-1/2 h-74 relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
            />
          </div>
          <div className="flex-1 md:w-1/2">
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
            <Button
              text="See More"
              url="#"
              className="p-4 cursor-pointer bg-green-500 border-none rounded-md text-white mt-4 transform -translate-y-1 transition-all duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 md:mt-6 md:text-lg lg:text-xl lg:mt-8 text-sm bg-green-500 text-white py-4 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
