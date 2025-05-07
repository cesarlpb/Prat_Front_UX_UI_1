import React, { Suspense, useState, useDeferredValue } from 'react';
import { Text, TextInput, View, ActivityIndicator, StyleSheet } from 'react-native';
import SearchResults from './SearchResults'; // Asegúrate que sea nativo también

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

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
          <SearchResults query={deferredQuery} />
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