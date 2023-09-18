import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import WithoutBill from '../../components/WithoutBill'
import ContainerBill from '../../components/ContainerBill'
import Title from '../../components/Title'
import Container from '../../components/Container'
import HeaderMain from '../../components/HeaderMain'
import CardMain from '../../components/CardMain'
import { MaterialIcons } from '@expo/vector-icons'

const Home = () => {
  return (
    <Container>
      <HeaderMain userName='Lailton' />
      <CardMain porcentSalary={40} salary={3500} />
      <View>
        <View className='flex-row justify-between mb-5 mt-7'>
          <Title>Recents</Title>
          <TouchableOpacity activeOpacity={0.7} className='flex-row items-center'>
            <Title>all</Title>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#FBFFF7" />
          </TouchableOpacity>
        </View>
        <ContainerBill />
        <WithoutBill />
      </View>
    </Container>
  )
}

export default Home