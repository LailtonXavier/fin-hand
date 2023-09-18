import { StatusBar } from 'expo-status-bar'
import Routes from './src/routes'
import {
  useFonts,
  WorkSans_600SemiBold,
  WorkSans_500Medium,
  WorkSans_400Regular
} from '@expo-google-fonts/work-sans'

export default function App() {
  const [hasLoadFonts] = useFonts({
    WorkSans_600SemiBold,
    WorkSans_500Medium,
    WorkSans_400Regular
  })

  if (!hasLoadFonts) {
    return null
  }
  
  return (
    <>
      <Routes />
      <StatusBar style="light" translucent />
    </>
  )
}
