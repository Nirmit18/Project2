import { Text, Box,  Container,  Heading,  Image, Img, Stack, VStack } from "@chakra-ui/react";
import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/2.webp'
import img2 from '../assets/3.jpeg'
import img3 from '../assets/homescreen.png'



const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  p:'4',
  textTransform:'uppercase',
  size:'4xl',
  transform:'translate(-50%,50%)',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
    
    <Box h={'full'} p={"16"} w={"full"}>
      <Heading>Hey There</Heading>
      <Stack direction={['column','row']} h={'fit-content'} 
      
      >
        <VStack w={"full"}>
          <Image src={img2} borderRadius={'full'}
          boxSize={'32'} p={'1.5'} />
        </VStack>

        <VStack>
          <Text fontSize={'xl'} fontFamily={'sans-serif'}>
          Chakra UI is a component library for React that makes it easy to build the UI of an app or website
          Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
          </Text>

          
        </VStack>
        </Stack>

        {/* </Stack> */}

         <Stack direction={['column','row']} color={"whiteAlpha.900"} p={"10"} w={"fit-content"} >
          <VStack w={'full'} bgColor={'purple.400'} borderRadius={"3xl"}  p={"2.5"} >
            <Heading >Smooth UI</Heading>
            <Text>
              "Chakra UI provides a set of performance optimizations that can help to reduce the amount of work that the browser needs to do when rendering your components"  </Text> 

          </VStack><VStack   bgColor={'purple.400'}
          borderRadius={"3xl"} p={"2.5"} >
            <Heading>RESPONSIVE</Heading>
            <Text>
            Chakra UI supports responsive styles out of the box.  Chakra UI allows you to provide object and array values to add mobile-first responsive styles.
            </Text>

          </VStack>

          
        </Stack>


    </Box>
    </Box>
  );
};

const MyCarousel = () =>(
  <Carousel 
  infiniteLoop 
  autoPlay 
  interval={1000}
  showArrows={false}
  showStatus={false}
  showThumbs={false}
  
  >

  <Box w={"full"} h={'100vh'} >
    <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Hello gamers
    </Heading>
    
  </Box>

  <Box w="full" h={"100vh"}>
    <Image src={img2}  h={"full"} w={"full"} objectFit={"cover"} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Watch the Future
    </Heading>
  </Box>

  <Box w="full" h={"100vh"}>
    <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Future is Gaming
    </Heading>
  </Box>

  <Box w="full" h={"100vh"}>
    <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Gaming on Console
    </Heading>
  </Box>

  <Box w="full" h={"100vh"}>
    <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Night life is Cool
    </Heading>
  </Box>
    
  </Carousel>
);

export default Home;
