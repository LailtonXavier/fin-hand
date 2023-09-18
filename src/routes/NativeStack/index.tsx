import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from '../../pages/Settings'
import MaterialTopTabs from '../MaterialTopTabs'
import Simulate from '../../pages/Simulate'

const tab = createNativeStackNavigator()

const NativeStack = () => {
  return (
    <tab.Navigator screenOptions={{ headerShown: false}}>
      <tab.Screen name='homeScreen' component={MaterialTopTabs} />
      <tab.Screen name='settingsScreen' component={Settings} />
      <tab.Screen name='simulatesScreen' component={Simulate} />
    </tab.Navigator>
  )
}

export default NativeStack