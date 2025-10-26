import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#42628e', // Color activo (azul)
        tabBarInactiveTintColor: '#C4C4C4', // Color inactivo (gris)
        tabBarStyle: styles.tabBarStyle, // Estilo de la barra
        headerShown: false,
        tabBarShowLabel: false, // Oculta las etiquetas de texto
      }}
    >
      {/* Pestaña de Inicio con Imagen */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/images/ico_home.png')} // Imagen para Inicio
                style={styles.imageStyle}
              />
              {focused && <View style={[styles.overlay, { backgroundColor: '#42628e', opacity: 0.3 }]} />}
            </View>
          ),
        }}
      />

      {/* Pestaña de Carrito */}
      <Tabs.Screen
        name="carrito"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/images/comida.png')} // Imagen para Carrito
                style={styles.imageStyle}
              />
              {focused && <View style={[styles.overlay, { backgroundColor: '#42628e', opacity: 0.3 }]} />}
            </View>
          ),
        }}
      />
      
      {/* Pestaña de Pedidos */}
      <Tabs.Screen
        name="pedidos"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/images/pedidos.png')} // Imagen para Pedidos
                style={styles.imageStyle}
              />
              {focused && <View style={[styles.overlay, { backgroundColor: '#42628e', opacity: 0.3 }]} />}
            </View>
          ),
        }}
      />

      
    </Tabs>
  );
}

// Estilos actualizados
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60, // Altura más baja de la barra
    backgroundColor: '#FFFFFF', // Fondo blanco
    borderTopWidth: 0, // Elimina el borde superior
    elevation: 0, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: -1 }, // Menos sombra
    shadowOpacity: 0.05, // Opacidad reducida
    shadowRadius: 3, // Radio más pequeño
    paddingBottom: 8, // Espacio inferior reducido
    paddingTop: 8, // Espacio superior reducido
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5, // Espaciado más compacto
    marginBottom: 0,
    position: 'relative',
  },
  imageStyle: {
    width: 30, // Tamaño más pequeño de la imagen
    height: 30,
    // Removed tintColor to avoid issues with non-tintable images
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15, // Match the icon container's rounded corners if any
  },
});