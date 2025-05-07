import React, {use, useEffect} from 'react';
import { fetchData } from './data.js';

function SearchResultsComponent({ query, onRender }) {
  // Llamamos a onRender cada vez que el componente se renderiza
  useEffect(() => {
    onRender?.();
  });
  if (query === '') {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return <p>No matches for <i>"{query}"</i></p>;
  }
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

export default React.memo(SearchResultsComponent);