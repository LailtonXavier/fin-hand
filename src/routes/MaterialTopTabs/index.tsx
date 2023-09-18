import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Octicons, AntDesign } from '@expo/vector-icons'

import History from '../../pages/History'
import Home from '../../pages/Home'
import Bill from '../../pages/Bill'

const Tab = createMaterialTopTabNavigator()


const MaterialTopTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      tabBarPosition='bottom'
      screenOptions={{
        tabBarIndicatorContainerStyle: { backgroundColor: '#000000'},
        tabBarIndicatorStyle: {backgroundColor: '#ffffff'},
        tabBarShowLabel: false,
        tabBarContentContainerStyle: {
          backgroundColor: '#000',
          marginBottom: 2,
        }
            
      }}
    >
      {/* <Tab.Screen
        name='SimulateScreen'
        component={Simulate} 
        options={{ 
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Octicons name="graph" size={26} color="white" />
            }
            return <Octicons name="graph" size={26} color="#00562d" />
          }
        }}
      /> */}
      <Tab.Screen
        name='HistoryScreen'
        component={History} 
        options={{ 
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Octicons name="history" size={24} color="#fff" />
            }
            return <Octicons name="history" size={24} color="#00562d" />
          }
        }}
      />
      <Tab.Screen 
        name='HomeScreen' 
        component={Home} 
        options={{ 
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AntDesign name="appstore1" size={26} color="white" />
            }
            return <AntDesign name="appstore-o" size={24} color="#00562d" />
          }
        }}
      />
      <Tab.Screen 
        name='BillScreen' 
        component={Bill} 
        options={{ 
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Octicons name="diff-added" size={26} color="white" />
            }
            return <Octicons name="diff-added" size={26} color="#00562d" />
          }
        }}
      />
      {/* <Tab.Screen
            name='SettingsScreen'
            component={Settings} 
            options={{ 
              tabBarIcon: ({ focused }) => {
                if (focused) {
                  return <Ionicons name="settings-outline" size={24} color="white" />
                }
                return <Ionicons name="settings-outline" size={24} color="#00562d" />
              }
            }}
          /> */}
    </Tab.Navigator>
  )
}

export default MaterialTopTabs