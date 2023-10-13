import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import Layout from '../components/Layout'
import CardDetail from '../components/CardDetail'
import ModalDeleteUser from '../components/ModalDeletUser'
import ModalEditUser from '../components/ModalEditUser'

const DetailScreen = () => {
  const bottomSheetRef = useRef(null)
  const bottomEditRef = useRef(null)
  const bukaModalDelete = () => {
    bottomSheetRef.current?.present()
  }
  const bukaModalEdit = () => {
    bottomEditRef.current?.present()
  }
  return (
    <Layout>
      <ModalDeleteUser ref={bottomSheetRef}/>
      <ModalEditUser ref={bottomEditRef}/>
    <View>
      <CardDetail buka={bukaModalDelete} edit={bukaModalEdit}/>
    </View>
    </Layout>
  )
}

export default DetailScreen