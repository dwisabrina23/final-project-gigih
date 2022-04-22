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
import {ToastError, ToastSuccess} from '../../Components/Toast/CustomToast';
import {Toaster} from 'react-hot-toast'

//services
import {useAddTrackToPlaylist} from '../../Service/SpotifyServices';

//redux
import {useSelector, useDispatch} from 'react-redux';
import { resetSelected} from '../../Redux/Slice/SongSlice';
import { useGetPlaylists } from '../../Service/SpotifyServices'

function ModalAddPlaylist() {
  const dispatch = useDispatch();
  const selectedTracks = useSelector((state) => state.song.selected);
  const token = useSelector((state) => state.auth.token);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    useGetPlaylists(token).then((data) =>{
      setPlaylists(data.items)},
    )
  }, []);

  const [playId, setPlayId] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const value = e.target.value;
    setPlayId(value);
  }

  const handleAddPlaylist = (id) => {
    e.preventDefault();
    const songs = selectedTracks.toString()
    if (selectedTracks.length > 0) {
        useAddTrackToPlaylist(token, id, songs).then(
            (data) => console.log(data)
      );

      ToastSuccess(`Song added to Playlist`);
      dispatch(resetSelected());
      history.push("/playlist");
    }
  }

  return (
    <>
    <Toaster/>
      <Button bg="rgb(138, 197, 175)" borderRadius='3xl' variant='solid' onClick={onOpen} sx={{float:"right"}}>Add to Playlist</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Songs to Playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="Select playlist">
              {
                playlists.map((item) => (
                  <option value={item.id} key={item.id} onChange={handleChange}>{item.name}</option>
                ))
              }
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
