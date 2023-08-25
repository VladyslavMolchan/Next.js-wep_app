interface Item {
    id: number;
    title: string;
    desc: string;
    image: string;
  }
  
  interface ItemsByCategory {
    applications: Item[];
    illustrations: Item[];
    websites: Item[];
  }
  
  export const items: ItemsByCategory = {
    applications: [
      {
        id: 1,
        title: "Creative Portfolio",
        desc: `Welcome to my world of creativity, where imagination knows no bounds. Here, I craft stories with colors, shapes, and pixels, weaving experiences that etch unforgettable memories. With every brushstroke and keystroke, I infuse life into concepts, breathing them into captivating realities.
  
        Explore my portfolio to unearth a symphony of design, innovation, and expression. Each project stands as a testament to my fervor and commitment, a distinct journey unfolding through visual artistry and the magic of code.
        
        Immerse yourself in the dynamic tapestry of my creations, where every pixel narrates a tale, and each line of code dances to its own rhythm. From evocative illustrations that resonate, to user-centric interfaces redefining engagement, I extend an invitation to perceive the world through my creative lens.
        
        Peer beyond the surface, unveiling the essence within each creation. Join me in commemorating the fusion of art and technology, a realm of boundless prospects and ceaseless inspiration.`,
        image: "/images/hands.jpg",
      },
      {
        id: 2,
        title: "Minimal Single Product",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
        "/images/hands.jpg",
      },
      {
        id: 3,
        title: "Strong Together Charity",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
        "/images/hands.jpg",
      }
    ],
    illustrations: [
      {
        id: 1,
        title: "Creative Portfolio",
        desc: `Step into my realm of limitless creativity, where I craft vivid stories using colors, shapes, and pixels, breathing life into unforgettable experiences. Through brushstrokes and keystrokes, I bring concepts to life, shaping captivating realities. Explore my portfolio to discover a fusion of design and innovation, each project a unique journey woven with visual artistry and the magic of code. Immerse yourself in my creations, where pixels and code intertwine to narrate tales and dance with rhythm. From poignant illustrations to groundbreaking user interfaces, I invite you to see the world through my creative lens. Join me in celebrating the marriage of art and technology, a realm of endless inspiration and possibilities.`,
        image:
        "/images/hands.jpg",
      },
      {
        id: 2,
        title: "Minimal Single Product",
        desc: "Simplicity at its finest: our sole product, perfectly suited for all your needs. Minimalism in design, maximum functionality. Unlock a new level of efficiency and enjoyment with our unique product. One solution – endless possibilities",
        image:
        "/images/hands2.jpg",
      },
      {
        id: 3,
        title: "Strong Together Charity",
        desc: `At Strong Together Charity, we harness unity for lasting impact. With collective determination, we address challenges in our communities and beyond. Join us in creating a compassionate world without boundaries. Together, we are the heart of change`,
        image:
        "/images/hands3.jpg",
      }
    ],
    websites: [
      {
        id: 1,
        title: "Creative Portfolio",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
        "/images/website.jpg",
      },
      {
        id: 2,
        title: "Minimal Single Product",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
        "/images/website2.jpg",
      },
      {
        id: 3,
        title: "Strong Together Charity",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
        "/images/website3.jpg",
      }
    ],
  };