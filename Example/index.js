import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Rave } from 'rave-reactnative-wrapper';
export default function App() {
  const onCancel = data => {
    console.log('onCancel', data);
  };
  const onSuccess = data => {
    console.log('onSuccess', data);
  };
  const onError = data => {
    console.log('onError', data);
  };
  const PayNow = props => {
    return (
      <TouchableOpacity style={{}} onPress={props.onPress}>
        <View>
          <Image source={''} style={{}} />
        </View>
        <Text style={{}}>Pay Now</Text>
        <Entypo name="chevron-thick-right" color="#C7C7CC" size={18} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Rave
        button={props => <PayNow {...props} />}
        buttonText="PAY NOW"
        raveKey="<RAVE-PUBLIC-KEY>"
        amount={10}
        currency={'NGN'}
        customerEmail={'jimionxyz@gmail.com'}
        customerPhone={'081384xx18'}
        customer_firstname="Ayomide"
        customer_lastname="Jimxi"
        ActivityIndicatorColor="black"
        subaccounts={[
          {
            id: 'RS_81F32DC27FCE9DAD882DEECC3745AEAA',
          },
        ]}
        meta={[{ metaname: 'test-name', metavalue: 'test-value' }]}
        country={'NG'}
        payment_options={'mpesa'}
        btnStyles={{
          backgroundColor: 'green',
          width: 100,
          alignContent: 'center',
        }}
        onCancel={onCancel}
        onSuccess={onSuccess}
        onError={onError}
        textStyles={{ color: 'white', alignSelf: 'center' }}
        txref={Date.now()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});









