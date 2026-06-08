import React from 'react'
import './Playlist.css';
import Tracklist from '../tracklist/Tracklist.jsx'

function Playlist({playlistTracks, onRemoveTrack, playlistName, setPlaylistName, onsavePlaylist}) {

  function handlePlaylistNameChange(event){
  setPlaylistName(event.target.value);
 }
 function handleSavePlaylist(){
  onsavePlaylist();
 }
 
  return (
    <div className="Playlist">
      <input onChange={handlePlaylistNameChange} 
       value={playlistName}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
      listResults={playlistTracks} 
      remove={true}
      onRemoveTrack={onRemoveTrack}/>
      <button onClick={handleSavePlaylist} className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
