import { Text } from 'react-native'

interface ITitle {
  children: React.ReactNode
}

const Title = ({ children }: ITitle) => {
  return (
    <>
      <Text className='font-body text-grayTitle text-base tracking-wider'>
        {children}
      </Text>
    </>
  )
}

export default Title