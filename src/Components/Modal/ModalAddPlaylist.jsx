import React, {useState} from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  useDisclosure
} from '@chakra-ui/react';

import useDocumentTitle from '../../Utils/UseDocumentTitle'

//services
import {useAddTrackToPlaylist} from '../../Service/SpotifyServices';

//redux
import {useSelector, useDispatch} from 'react-redux';
import { resetSelected} from '../../Redux/Slice/SongSlice';

function ModalAddPlaylist({id, title}) {
  const dispatch = useDispatch();

  const selectedTracks = useSelector((state) => state.song.selected);
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.auth.user_data);

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const handleAddPlaylist = (id) => {
    e.preventDefault();
    if (selectedTracks.length > 0) {
      // const userId = userData?.id;
      addTrackToPlaylist(token, id, selectedTracks).then(
            (data) => console.log(data)
      );

      toast(`Song added to Playlist`);
      dispatch(resetSelected());
      history.push("/playlist");
    }
  }
  return (
    <>
      <Button bg="rgb(138, 197, 175)" borderRadius='3xl' variant='solid' onClick={onOpen} sx={{float:"right"}}>Add to Playlist</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Songs to Playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="Select playlist">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalAddPlaylist
