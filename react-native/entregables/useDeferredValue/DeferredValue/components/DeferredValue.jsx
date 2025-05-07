// Nota: el hook useDeferredValue es una forma de desacoplar el estado visual
// de la aplicación con el estado de la lógica de negocio. En este ejemplo, se
// utiliza para evitar que el componente se vuelva a renderizar mientras se
// está escribiendo en el input de búsqueda.

// Algunas preguntas a responder:
// 1. ¿Cuál es el beneficio de usar useDeferredValue en este caso?
// 2. ¿Cómo se comportaría el componente si no se utilizara useDeferredValue?
// 3. ¿Cuál es la relación entre el estado isStale y el estado deferredQuery?
// Y, finalmente, puedes hacer una comparativa sobre el comportamiento con y sin useDeferredValue.
//
import React, { Suspense, useState, useDeferredValue, useEffect } from 'react';
import { Text, TextInput, View, ActivityIndicator, StyleSheet } from 'react-native';
import SearchResults from './SearchResults'; // Asegúrate que sea nativo también

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  // Para ver los cambios en la consola
  console.log('🔹 query:', query);
  console.log('⏳ deferredQuery:', deferredQuery);
  console.log('🔄 isStale:', isStale);
  
  // Versión sin useDeferredValue (descomenta para probar):
  // const deferredQuery = query; // Sin useDeferredValue
  // const isStale = false; // Siempre falso sin useDeferredValue

  // Efecto para ver cuando se actualiza el deferredQuery
  useEffect(() => {
    console.log('🚀 deferredQuery actualizado:', deferredQuery);
  }, [deferredQuery]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>🔍 Busca álbumes con calma:</Text>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Escribe tu magia..."
      />
      <Suspense fallback={<ActivityIndicator size="large" color="#007AFF" />}>
        <View style={[styles.results, { opacity: isStale ? 0.5 : 1 }]}>
          <SearchResults 
            query={deferredQuery} 
            // Para ver cuándo se renderiza SearchResults
            onRender={() => console.log('🎬 SearchResults renderizado')}
          />
        </View>
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  results: {
    flex: 1,
    transitionDuration: '200ms', // No animación nativa, pero el estilo queda con intención
  },
});