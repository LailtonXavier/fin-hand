import { View, Text, TouchableOpacity} from 'react-native'
import { Octicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

interface ICardMain {
  salary: number
  porcentSalary: number
}

const CardMain = ({porcentSalary, salary}: ICardMain) => {
  return (
    <View className='relative w-full h-48 p-7 mt-12 bg-transparent'>
      <View className='flex-row'>
        <Octicons name="credit-card" size={24} color="#fff" />
        <Text className='font-alt text-base text-grayTitle pl-4'>
            Total Balance
        </Text>
      </View>
      <Text className='text-2xl text-whiteText not-italic font-title
       tracking-wide mt-5'
      >
          RS {salary}
      </Text>
      <Text className='bg-greenMed w-20 h-7 rounded-md text-center
       text-whiteText text-base font-body mt-2'
      >
          +{porcentSalary}%
      </Text>
      <TouchableOpacity className='absolute bottom-0 right-1/2'>
        <MaterialIcons 
          name="keyboard-arrow-down" 
          size={40} 
          color="#23383B" 
        />
      </TouchableOpacity>
      <LinearGradient 
        colors={['rgba(9, 27, 29, 1)', '#0508007b']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ 
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 192,
          borderRadius: 10,
          zIndex: -1,
          backgroundColor: 'transparent',
        }}
      />
    </View>
  )
}

export default CardMain