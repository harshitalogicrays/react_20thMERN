import { Box, Image, Button, Flex, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const images = [
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  "https://st2.depositphotos.com/2001755/5443/i/450/depositphotos_54431143-stock-photo-beautiful-landscape.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-wallpaper-free-image.jpg?w=600&quality=80",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay effect with 2-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); //0%5=0 , 6%5=1
    }, 5000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <Box position="relative"  h="400px"  overflow="hidden"  >
      <Image src={images[currentIndex]} alt="loading...." w="100%" h="100%" objectFit="cover" />

      {/* Left and Right Navigation Buttons */}
      <IconButton
        aria-label="Previous Image"
        icon={<ChevronLeftIcon boxSize={8} />}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        onClick={handlePrev}
        colorScheme="teal"
        variant="ghost"
      />
      <IconButton
        aria-label="Next Image"
        icon={<ChevronRightIcon boxSize={8} />}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        onClick={handleNext}
        colorScheme="teal"
        variant="ghost"
      />

      {/* Indicator Dots */}
      {/* <Flex justify="center" mt={2} position="absolute" bottom="10px" w="100%">
        {images.map((_, index) => (
          <Box
            key={index}
            h="10px"
            w="10px"
            bg={index === currentIndex ? "teal.500" : "gray.300"}
            borderRadius="50%"
            mx={1}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex> */}
    </Box>
  );
}

export default ImageCarousel;
