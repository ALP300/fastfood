// app/main.tsx
import { useRouter } from 'expo-router';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function MainScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header con logo */}
        <View style={styles.header}>
         
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>
            Descubre todo lo que tenemos para ti
          </Text>
        </View>

        {/* Imagen de bienvenida */}
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/pizza.png')}
            style={styles.welcomeImage}
          />
        </View>

        {/* Botones de acción */}
        <View style={styles.actionsContainer}>
          {/* Botón de Iniciar Sesión */}
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={() => router.push('/login')}
          >
            <Text style={[styles.buttonText, styles.loginButtonText]}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          {/* Botón de Registrarse */}
          <TouchableOpacity 
            style={[styles.button, styles.registerButton]}
            onPress={() => router.push('/register')}
          >
            <Text style={[styles.buttonText, styles.registerButtonText]}>
              Crear Cuenta
            </Text>
          </TouchableOpacity>

          {/* Enlace para continuar sin cuenta (opcional) */}
          <TouchableOpacity 
            style={styles.guestLink}
            onPress={() => router.push('/home')}
          >
            <Text style={styles.guestText}>
              Continuar como invitado
            </Text>
          </TouchableOpacity>
        </View>

        {/* Información adicional */}
        <View style={styles.features}>
          <Text style={styles.featuresTitle}>¿Qué puedes hacer?</Text>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🛒</Text>
            <Text style={styles.featureText}>Comprar productos exclusivos</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🚚</Text>
            <Text style={styles.featureText}>Seguimiento de pedidos</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>⭐</Text>
            <Text style={styles.featureText}>Ofertas especiales</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf0e0',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeImage: {
    width: 250,
    height: 240,
  },
  actionsContainer: {
    marginBottom: 40,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#2096D4',
  },
  registerButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2096D4',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  loginButtonText: {
    color: '#fff',
  },
  registerButtonText: {
    color: '#2096D4',
  },
  guestLink: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  guestText: {
    color: '#666',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  features: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
  },
  featureText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
});