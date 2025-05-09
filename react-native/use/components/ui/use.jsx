import React, { createContext, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Bienvenido">
      <Button show={true}>Registrarse</Button>
      <Button show={false}>Iniciar sesión</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const panelStyle = theme === 'dark' ? styles.panelDark : styles.panelLight;
  const textStyle = theme === 'dark' ? styles.textDark : styles.textLight;

  return (
    <View style={[styles.panel, panelStyle]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {children}
    </View>
  );
}

function Button({ show, children }) {
  if (show) {
    const theme = useContext(ThemeContext);
    const buttonStyle = theme === 'dark' ? styles.buttonDark : styles.buttonLight;
    const textStyle = theme === 'dark' ? styles.buttonTextDark : styles.buttonTextLight;

    return (
      <TouchableOpacity style={[styles.button, buttonStyle]}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
  return null; // React Native uses null instead of false for conditional rendering
}

const styles = StyleSheet.create({
  panel: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  panelLight: {
    backgroundColor: '#f0f0f0',
  },
  panelDark: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textLight: {
    color: '#333',
  },
  textDark: {
    color: '#f0f0f0',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLight: {
    backgroundColor: '#ddd',
  },
  buttonDark: {
    backgroundColor: '#555',
  },
  buttonTextLight: {
    color: '#333',
  },
  buttonTextDark: {
    color: '#f0f0f0',
  },
});