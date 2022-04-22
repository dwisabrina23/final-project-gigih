import React from 'react'

//components
import { Box, Text, Flex, Stack, Link, Image } from '@chakra-ui/react'
import logoSpotify from '../../Assets/Images/spotify-logo.png'
import Profile from '../Profile/Profile';

//redux
import { useSelector } from 'react-redux';

export default function Navbar() {
  const isAuth = useSelector((state) => state.auth.login);
  const userData = useSelector((state) => state?.auth.user_data);
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      wrap="wrap"
      w="100%"
      p={4}
      bg="black"
      color="white"
    >
      <Box>
        <Image
          height="30px"
          objectFit="cover"
          src={logoSpotify}
          alt="logo Spotify"
        />
      </Box>
      <Box flexBasis={{ base: '100%', md: 'auto' }}>
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[3, 3, 0, 0]}
        >
          <Link href="/about">
            <Text display="block">About</Text>
          </Link>
          <Link href="/home">
            {isAuth ? <Profile data={userData} />
            :<Text display="block">Login with Spotify</Text>
          }
          </Link>
        </Stack>
      </Box>
    </Flex>
  )
}
