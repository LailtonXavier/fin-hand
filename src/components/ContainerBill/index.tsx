import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ContainerBill = () => {
  return (
    <View className='flex-row mb-5 h-16 px-8 py-1 rounded-xl bg-greenItemCard justify-between items-center'>
      <View className='flex-row items-center space-x-4'>
        <MaterialCommunityIcons name="netflix" size={30} color="#fff" />
        <View>
          <Text className='font-body text-white text-base tracking-wider font-medium'>Netflx</Text>
          <Text className='font-body text-grayTitle text-xs tracking-wider'>12/12/23</Text>
        </View>
      </View>
      <Text className='font-body text-redMed text-base tracking-wider font-medium'>30.30</Text>
    </View>
  )
}

export default ContainerBill