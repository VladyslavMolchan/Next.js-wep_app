import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  url: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, url, className }) => {
  return (
    <Link href={url}>
      <button className={`p-4 cursor-pointer bg-green-500 border-none rounded-md text-white ${className}`}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
