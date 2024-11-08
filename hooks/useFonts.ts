import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.ttf'),
          'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
          'Pretendard-ExtraBold': require('../assets/fonts/Pretendard-ExtraBold.ttf'),
          'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.ttf'),
          'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.ttf'),
          'Pretendard-Light': require('../assets/fonts/Pretendard-Light.ttf'),
          'Pretendard-ExtraLight': require('../assets/fonts/Pretendard-ExtraLight.ttf'),
          'Pretendard-Thin': require('../assets/fonts/Pretendard-Thin.ttf'),
          'Pretendard-Black': require('../assets/fonts/Pretendard-Black.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
}
