import React, {Component} from 'react';
import {View, Text} from 'react-native';
class CategoriesScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Text>Categories Screen</Text>
      </View>
    );
  }
}

export default CategoriesScreen;
