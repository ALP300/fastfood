// app/(tabs)/home/carrito.tsx
import { H1 } from '@expo/html-elements';
import { StyleSheet, View } from 'react-native';

export default function Pedido() {
  return (
    <View style={styles.container}>
      <H1>Pedido</H1>
      {/* Rest of your cart content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});