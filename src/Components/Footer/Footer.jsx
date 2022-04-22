import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="70px"
        p={{ base: '3rem', lg: '0' }}
        bg="#4dc05a"
      >
        <Text textAlign="center" size="2rem" fontWeight="bold" color="#fff">
        &copy; 2022 Spotify Web App Clone - Dwi Sabrina All Right
          Reserved{' '}
        </Text>
      </Flex>
    </>
  )
}

export default Footer
