import React from 'react'
import {Box, Badge, Image} from '@chakra-ui/react';

function PlaylistItem({playlist}) {
  return (
    <div className="col-md-4 mb-3">
      <Box
        h="full"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={
            playlist.images[0]?.url}
          alt="playlistImg"
        />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {playlist.collaborative ? 'public' : 'private'}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {playlist.owner.display_name} &bull; {playlist.tracks.total} Songs
            </Box>
          </Box>
          <Box
          color="gray.50"
            mt="3"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {playlist.name}
          </Box>
          <Box color="gray.400">{playlist.description}</Box>
        </Box>
      </Box>
    </div>
  )
}

export default PlaylistItem
