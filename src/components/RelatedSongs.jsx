import SongBar from './SongBar'

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Related Songs: </h1>
    <div className='mt-6 w-full flex-col flex'>
      {data?.map((song, i) => (
        <SongBar 
          key={`${artistId}-${song.key}-${i}`} 
          i={i} 
          song={song} 
          activeSong={activeSong} 
          artistId={artistId} 
          isPlaying={isPlaying} 
          handlePauseClick={handlePauseClick} 
          handlePlayClick={handlePlayClick}  
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
