import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import user from '../../assets/user.png'
import React from 'react'

interface IHeaderMain {
  userName: string
}

const HeaderMain = ({ userName }: IHeaderMain) => {

  const navigation = useNavigation()

  return (
    <View className='w-full flex-row items-center justify-between'>
      <Image className='w-photoSize h-photoSize' source={user} />
      <Text className='text-greenText font-title text-3xl'>
        {userName}
      </Text>
      <TouchableOpacity
        className='flex items-center justify-center rounded-full w-photoSize h-photoSize'
        onPress={() => navigation.navigate('settingsScreen')} 
      >
        <Ionicons name="settings-outline" size={30} color="white" />
      </TouchableOpacity>
    </View> 
  )
}

export default HeaderMain