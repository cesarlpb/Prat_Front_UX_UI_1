import React, { useState } from 'react';

function SongCard({ coverArt, title, artist, duration, onPlay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.card, 
        ...(isHovered ? styles.cardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.coverArtContainer}>
        <img src={coverArt} alt={`Portada de ${title}`} style={styles.coverArt} />
        {isHovered && (
          <div style={styles.playOverlay} onClick={onPlay}>
            <span style={styles.playButton}>▶</span>
          </div>
        )}
      </div>
      <div style={styles.info}>
        <div style={styles.titleContainer}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.artist}>{artist}</p>
        </div>
        <span style={styles.duration}>{duration}</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: '8px',
    padding: '10px',
    width: '300px',
    maxWidth: '100%',
    transition: 'background-color 0.3s ease',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  cardHover: {
    backgroundColor: '#282828',
  },
  coverArtContainer: {
    position: 'relative',
    marginRight: '15px',
  },
  coverArt: {
    width: '80px',
    height: '80px',
    borderRadius: '4px',
    objectFit: 'cover',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: '0 0 5px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '1.2',
  },
  artist: {
    margin: '0',
    fontSize: '14px',
    color: '#b3b3b3',
  },
  duration: {
    fontSize: '14px',
    color: '#b3b3b3',
  },
  playButton: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default SongCard;
