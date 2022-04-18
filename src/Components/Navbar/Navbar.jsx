import React from 'react'
import { Box, Text, Flex, Stack, Link } from '@chakra-ui/react'

export default function Navbar(props) {
  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg="black"
      color="white"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Box>
      <Box flexBasis={{ base: '100%', md: 'auto' }}>
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <Link href="/">
            <Text display="block">About</Text>
          </Link>
          <Link href="/about">
            <Text display="block">Login with Spotify</Text>
          </Link>
        </Stack>
      </Box>
    </Flex>
  )
}
