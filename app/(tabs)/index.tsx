import { useSesion } from '@/store';
import { Usuario } from '@/util/definitions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
export default function IndexScreen() {
  const router = useRouter();
  const { setSession } = useSesion();

  const checkSession = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const userObject = JSON.parse(storedUser) as Usuario;
        setSession({ sesionUsuario: userObject });
        router.replace('/home');
      } else {
        router.replace('/main');
      }
    } catch (error) {
      console.error("❌ Error al verificar la sesión:", error);
     
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkSession();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.touchable}
        onPress={() => checkSession()}
        activeOpacity={0.8}
      >
        <Image
          source={require('@/assets/images/splash.png')}
          style={styles.splashImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2096D4',
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 200,
    height: 200,
  },
});
