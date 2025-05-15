import "./PropsCard.css";

export default function PropsCard({ cover, title, artist, duration, onPlay }) {
  return (
    <div className="props-card">
      {/* Portada */}
      <img src={cover} alt={`${title} cover`} className="cover" />

      {/* Texto + icono */}
      <div className="info">
        <div>
          <h3 className="title">{title}</h3>
          <p className="meta">
            {artist} • {duration}
          </p>
        </div>

        {/* Icono de reproducción */}
        <button
          className="play-btn"
          aria-label="Reproducir"
          onClick={onPlay}
          type="button"
        >
          ▶️
        </button>
      </div>
    </div>
  );
}

/* Nota: si `onPlay` es opcional, simplemente pásale
   una función vacía desde donde uses el componente:
   <PropsCard ... onPlay={() => {}} /> */
