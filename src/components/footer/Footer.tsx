import Image from 'next/image';

interface FooterProps {}

const socialIcons = [
  { href: 'https://web.telegram.org/k/', src: '/images/telegram.svg', alt: 'Telegram' },
  { href: 'https://instagram.com', src: '/images/inst.png', alt: 'Instagram' },
  { href: 'https://twitter.com', src: '/images/twitter.png', alt: 'Twitter' },
  { href: 'https://youtube.com', src: '/images/yt.png', alt: 'YouTube' },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-16 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
      <div className="mb-4 md:mb-0">
        <p className="text-sm">&copy; 2023 Molchan Vladyslav</p>
      </div>

      <div className="flex gap-4">
        {socialIcons.map((icon, index) => (
          <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
            <Image src={icon.src} width={15} height={15} alt={icon.alt} className="opacity-60 cursor-pointer" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
