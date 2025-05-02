import './Card.css'

export default function Card({title ="por defecto",description="descripcion por defecto",src,alt}) {
    src = "https://i.pinimg.com/736x/41/ff/22/41ff2201750605fe76fc30ad295bc562.jpg",
    alt = "imagen"
    return(
    <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={src} alt={alt} />
    </div>
    );
}