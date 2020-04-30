import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, Alert } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { Rave } from './index'

const PayNow = (props) => {
  return (
    <TouchableOpacity style={{}} onPress={props.onPress}>
      <View>
        <Image source={""} style={{}} />
      </View>
      <Text style={{}}>Pay Now</Text>
      <Entypo name="chevron-thin-right" color="#C7C7CC" size={18} />
    </TouchableOpacity>
  )
}

const user = {
    email: "team9.tech@gmail.com",
    phone: "08114089344",
    name: "Martins Joseph"
}

const txRef = "FLW-121234"

class WithRave extends Component {
  onSuccess = (data) => {
    console.log('success', data)
  }

  onCancel = (data) => {
    console.log('Cancelled', 'transaction was cancelled', data)
  }

  onError = (error) => {
    Alert.alert('something went wrong')
  }

  render() {
    return (
      <View style={styles.container}>
        <Rave
          button={props => (
            <PayNow {...props}/>
          )}
          raveKey={"RAVE-PUBLIC-KEY"}
          amount={"20000"}
          contentDescription={`You will be paying the 20000 Naira Now`}
          customerEmail={user.email}
          customerPhone={user.phone}
          billingEmail={user.email}
          billingMobile={user.phone}
          billingName={user.name}
          ActivityIndicatorColor="black"
          onCancel={this.onCancel}
          onSuccess={this.onSuccess}
          onError={this.onError}
          txref={txRef}
        />
      </View>
    )
  }
}

export default WithRave
