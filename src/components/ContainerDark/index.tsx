import { ImageBackground } from 'react-native'
import greenBg from '../../assets/bg-green.png'

interface IContainer {
  children: React.ReactNode
}

const ContainerDark = ({ children }: IContainer) => {
  return (
    <ImageBackground
      source={greenBg}
      className='bg-[#000201f6] flex-1 pt-12 px-4 relative'
      imageStyle={{ position: 'absolute', top: '-40%', left: '0%', opacity: 1 }}
    >
      {children}
    </ImageBackground>
  )
}

export default ContainerDark