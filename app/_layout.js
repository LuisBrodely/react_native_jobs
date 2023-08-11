import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()
// Esta línea llama a la función preventAutoHideAsync() del módulo SplashScreen. Esto 
// evitará que la pantalla de inicio se oculte automáticamente, lo que permite controlar 
// cuándo se oculta.

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  // Si las fuentes aún no se han cargado, el componente retorna null. Esto evita que se 
  // renderice la interfaz de usuario antes de que se carguen las fuentes.

  // Si las fuentes se han cargado (fontsLoaded es true), se llama a 
  // SplashScreen.hideAsync() para ocultar la pantalla de inicio.

  if(!fontsLoaded) return null

  // Si las fuentes aún no se han cargado, el componente retorna null. Esto evita que se 
  // renderice la interfaz de usuario antes de que se carguen las fuentes.

  return (
    <Stack onLayout={onLayoutRootView}/> 
  )
}

export default Layout