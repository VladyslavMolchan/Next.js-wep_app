import Link from 'next/link';
import React from 'react';
import "./portfolio.css";

interface PortfolioItemProps {
  bgImage: string;
  title: string;
  href: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ bgImage, title, href }) => (
  <article className="portfolio-item bg-cover bg-center border border-gray-300 rounded-lg overflow-hidden hover:shadow-md hover:scale-105 transition duration-300 relative transform motion-safe:hover:scale-105">
    <Link href={href}>
      <figure className=" h-80 md:h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}></figure>
      <div className="portfolio-description p-4 text-xl font-semibold text-white absolute bottom-0 right-0 bg-black bg-opacity-70">
        <span className="title">{title}</span>
      </div>
    </Link>
  </article>
);

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { bgImage: "/images/illustration.png", title: "Illustrations", href: "/portfolio/illustrations" },
    { bgImage: "/images/websites.jpg", title: "Websites", href: "/portfolio/websites" },
    { bgImage: "/images/apps.jpg", title: "Application", href: "/portfolio/application" },
  ];

  return (
    <main className="bg-gray-100 py-10 px-4 my-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-10 text-[#53c28b]">Choose a Gallery</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Portfolio;
