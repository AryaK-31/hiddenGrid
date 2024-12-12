import { useEffect, useState } from "react";

const App = () => {
  const images = [
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
    "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
  ];

  const [currentSynonym, setCurrentSynonym] = useState("love");
  const synonyms = [
    "love",
    "affection",
    "adoration",
    "devotion",
    "fondness",
    "passion",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSynonym((prevSynonym) => {
        const currentIndex = synonyms.indexOf(prevSynonym);
        const nextIndex = (currentIndex + 1) % synonyms.length;
        return synonyms[nextIndex];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-300 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none"></div>

      {/* Lovely Message */}
      <div
        className="absolute z-20 text-center text-white drop-shadow-lg 
        animate-fade-slide-in"
      >
        <h1 className="happy text-5xl md:text-6xl font-serif font-bold mb-4">
          Happy 1st Anniversary,{" "}
          <span className="happySpan text-pink-600 uppercase min-w-[1rem]">
            My {currentSynonym}!
          </span>{" "}
          ❤️
        </h1>
        <p className="text-lg md:text-2xl font-mono">
          &quot;<span className="text-yellow-500">One year</span> of {currentSynonym}, laughter, and countless memories.
          Here&apos;s to <span className="text-yellow-500">many more</span>!&quot;
        </p>
      </div>

      {/* Grid of Pictures */}
      <div className="grid grid-cols-4 gap-1 h-full w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden h-full w-full"
          >
            {/* Image */}
            <img
              src={img}
              alt={`Memory-${index}`}
              className="h-full w-full object-cover transition-all duration-500 scale-110 group-hover:scale-100"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-95 group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
