export default function SongCard({ song }) {
  return (
    <div className="group relative w-full max-w-sm bg-black rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-200">
      {/* Album Art */}
      <div className="relative">
        <img
          src={song.albumArt}
          alt={song.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
      
      {/* Song Info */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-white font-semibold text-lg mb-1 truncate">{song.title}</h3>
        
        {/* Artist */}
        <p className="text-gray-400 text-sm">{song.artist}</p>
        
        {/* Duration */}
        <p className="text-gray-400 text-sm mt-2">{song.duration}</p>
      </div>
      
      {/* Play Button */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        </button>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
    </div>
  );
}
