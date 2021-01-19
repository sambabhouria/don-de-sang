/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AuthContext} from '../context/auth-provider';

function Menu(props) {
  const {logout} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image source={require('../src/images/me.png')} style={styles.image} />
        <Text style={styles.text}>Samba bhouria</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({color, size}) => (
          <MaterialIcons name="logout" color={color} size={size} />
        )}
        label="Logout"
        inactiveTintColor="black"
        style={{
          width: '100%',
          marginLeft: 0,
          borderRadius: 0,
          padding: 1,
        }}
        onPress={() => {
          logout();
        }}
      />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    marginTop: -5,
    padding: 10,
    backgroundColor: '#fe6e58',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
    // fontFamily: 'Helvetica-Bold-Font',
  },
});
export default Menu;
