import React, { FC } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-2 sm:px-4 md:px-6 lg:px-8 my-6">
      <header className="relative">
        <Image
          src="/images/aboutUs3.jpg"
          width={600}
          height={400}
          layout="responsive"
          alt="About Us"
          className="object-cover my-5"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 px-2">
          We are a creative and dedicated team
          </h1>
        </div>
      </header>
      <main className="py-8 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8">
          <section className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-green-500">
              Who Are We?
            </h2>
            <p className="text-gray-700">
            Embodied Excellence

At Embodied Excellence, we are more than just a team – we are a collective force of dedicated individuals driven by a shared passion. We believe in pushing the boundaries of creativity and innovation to shape a world where possibilities are endless.
<br/>
<br/>
Our Identity
<br/>
<br/>
We are architects of ideas, creators of change, and champions of our craft. With a unified vision, we navigate the realms of imagination to craft experiences that inspire and solutions that transform. Our journey is fueled by the desire to leave an indelible mark of excellence in everything we do.
<br/>
<br/>
Why Choose Us?
<br/>
<br/>
Embrace the Extraordinary: We go beyond the ordinary to curate extraordinary outcomes that defy expectations.
<br/>
Innovate with Impact: Innovation is the heartbeat of our approach. We innovate not just for the sake of it, but to create meaningful impacts.
<br/>
Passion for Precision: Precision is our forte. Every detail, every pixel, every word – everything is meticulously crafted.

            </p>
          </section>

          <section className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-green-500">
              What We Do?
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700">
              Our Activities

At Embodied Excellence, we specialize in creating unique and inspiring solutions that rewrite the rules of the game. Our team of experts combines skills and a passion for innovation to deliver products and services that contribute to our clients success.
<br/>
<br/>
Our Approach
<br/>
<br/>
We draw inspiration from challenges, strive for innovation, and possess the ability to see beyond the horizon. Whether we're developing a digital product, designing visuals, or crafting a marketing strategy, we aim to bring quality, creativity, and efficiency to every aspect of our work.
<br/>
<br/>
Our Services
<br/>
<br/>
Design and Visualization: We create appealing designs that are not only beautiful but also functional. Our visualization turns ideas into reality.
<br/>
Software Development: Our team of developers turns concepts into quality software products, ensuring impeccable performance and outstanding user experience.
<br/>
Marketing Strategies: We develop data-driven marketing strategies to help your brand stand out and succeed by understanding the market and analyzing trends.
<br/>
Consulting and Innovation: We provide consulting services, helping companies see opportunities where others see obstacles and innovate for success.
              </p>
            </div>
            <Button
              url="/contact"
              text="Contact"
              className="mt-4 transform -translate-y-1 transition-all duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 md:mt-6 md:text-lg lg:text-xl lg:mt-8 text-sm bg-green-500 text-white py-4 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
