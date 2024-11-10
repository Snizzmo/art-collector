import React, { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import ArtworkModal from '../components/ArtworkModal';

const OpenPackPage = () => {
  const { theme, packsOpenedToday, setPacksOpenedToday, dailyLimit, collection, setCollection } = useContext(GlobalContext);
  const [cards, setCards] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showCards, setShowCards] = useState(false);

  const artworkPool = [
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', rarity: 'legendary', year: 1503, description: 'One of the most famous paintings in the world...', image: './images/famous_artworks/mona-lisa.jpg' },
    { title: 'The Starry Night', artist: 'Vincent van Gogh', rarity: 'rare', year: 1889, description: 'Van Gogh’s masterpiece...', image: './images/famous_artworks/starry-night.jpg' },
    { title: 'The Persistence of Memory', artist: 'Salvador Dalí', rarity: 'uncommon', year: 1931, description: 'Iconic surrealist painting...', image: './images/famous_artworks/persistence-of-memory.jpg' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', rarity: 'common', year: 1665, description: 'A well-known portrait...', image: './images/famous_artworks/girl-with-pearl-earring.jpg' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', rarity: 'common', year: 1486, description: 'Depicts the goddess Venus...', image: './images/famous_artworks/birth-of-venus.jpg' },
  ];

  const openNewPack = () => {
    if (packsOpenedToday >= dailyLimit) {
      alert("You've reached your daily limit of packs!");
      return;
    }

    const selectedCards = [];
    while (selectedCards.length < 3) {
      const randomIndex = Math.floor(Math.random() * artworkPool.length);
      const selectedArtwork = artworkPool[randomIndex];
      if (!selectedCards.some(card => card.title === selectedArtwork.title)) {
        selectedCards.push(selectedArtwork);
      }
    }

    setShowCards(false); // Hide current cards
    setTimeout(() => {
      setCards(selectedCards);
      setCollection([...collection, ...selectedCards]);
      setPacksOpenedToday(packsOpenedToday + 1);
      setShowCards(true); // Show new cards
    }, 600); // Delay to allow for the push down animation
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-marble' : 'bg-light-marble'} min-h-screen pt-24 p-8 flex flex-col items-center`}>
      <div className="text-center mb-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-red-500 hover:bg-red-700 text-white text-2xl px-8 py-4 rounded-full font-bold shadow-md transition"
          onClick={openNewPack}
        >
          Open Pack
        </motion.button>
      </div>

      <div className="pack-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <AnimatePresence>
          {showCards && cards.map((card, index) => (
            <motion.div
              key={`${card.title}-${index}-${packsOpenedToday}`} // Unique key to trigger re-animation
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Card 
                title={card.title} 
                artist={card.artist} 
                rarity={card.rarity} 
                image={card.image} 
                onClick={() => setSelectedArtwork(card)} // Show modal on click
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <ArtworkModal 
          artwork={selectedArtwork} 
          onClose={() => setSelectedArtwork(null)} 
        />
      )}
    </div>
  );
};

export default OpenPackPage;