import React from 'react'
import { Box, Text, Flex, Stack, Link } from '@chakra-ui/react'

function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}


function MenuItem({ children, to = '/'}) {
  return (
    <Link href={to}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  )
}
function NavbarContainer(props) {
  return (
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg={["primary.500", "primary.500", "transparent", "transparent"]}
    color={["white", "white", "primary.700", "primary.700"]}
    {...props}
  >
    <Box
      display={{ base: 'none' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Login with Spotify</MenuItem>
      </Stack>
    </Box>
    </Flex>
  )
}

export default function Navbar(props) {
    return (
      <NavbarContainer {...props}>
        <Logo
          w="100px"
        />
      </NavbarContainer>
    )
}

