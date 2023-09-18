import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Title from '../Title'

const WithoutBill = () => {
  return (
    <View className='flex-row mb-5 h-16 px-8 py-1 rounded-xl
     bg-greenItemCard justify-center items-center space-x-5'
    >
      <Feather name="alert-circle" size={36} color="#FBFFF7" />
      <Title>Without bill</Title>
    </View>
  )
}

export default WithoutBill