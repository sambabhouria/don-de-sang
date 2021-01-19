import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';

function BecomeDonor() {
  const [selectedValue, setSelectedValue] = useState('Select Your Blood Type');
  const [data, setData] = useState({
    name: '',
    mobile: '',
    isValidName: true,
    isValidMobile: true,
    isLoading: false,
  });
  const isValidInformation = () => {
    if (data.name.trim() === '' || data.name.length < 3) {
      setData({
        ...data,
        isValidName: false,
      });
      return false;
    }
    if (data.mobile.trim() === '' || data.mobile.length < 11) {
      setData({
        ...data,
        isValidMobile: false,
      });
      return false;
    } else {
      return true;
    }
  };
  const textInputChanged = (val, fieldName) => {
    if (fieldName == 'name') {
      setData({
        ...data,
        name: val,
        isValidName: true,
      });
    }
    if (fieldName == 'mobile') {
      setData({
        ...data,
        mobile: val,
        isValidMobile: true,
      });
    }
  };

  const becomeDonorButtonHandler = () => {
    console.log('working');
    if (isValidInformation()) {
      console.log('Everthing is Fine');
    } else {
      console.log('Error');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerContainer} />
      <View style={styles.formContainer}>
        <Text style={styles.becomeText}>Become a Donor</Text>
        <View style={styles.inputConatiner}>
          <Text style={styles.labelText}> Your Name </Text>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            onChangeText={(e) => textInputChanged(e, 'name')}
          />
          {!data.isValidName && (
            <Text style={styles.errorMessage}>
              Required & must be at least 3 characters{' '}
            </Text>
          )}
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.labelText}> Your Mobile # </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="phone-pad"
            onChangeText={(e) => textInputChanged(e, 'mobile')}
          />
          {!data.isValidMobile && (
            <Text style={styles.errorMessage}>
              Required & must be at least 11 digits{' '}
            </Text>
          )}
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.labelText}> Your City </Text>
          <View style={styles.selectBox}>
            <Picker
              selectedValue={selectedValue}
              style={{
                width: '100%',
                marginLeft: 10,
                color: '#666666',
                padding: 12,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Gujrat" value="Gujrat" />
              <Picker.Item label="Kharian" value="Kharian" />
              <Picker.Item label="Kotla" value="Kotla" />
              <Picker.Item label="Jalalpur" value="Jalalpur" />
              <Picker.Item label="Barnala" value="Barnala" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputConatiner}>
          <Text style={styles.labelText}> Blood Group </Text>
          <View style={styles.selectBox}>
            <Picker
              selectedValue={selectedValue}
              style={{
                width: '100%',
                marginLeft: 10,
                color: '#666666',
                padding: 12,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="O+" value="O_Positive" />
              <Picker.Item label="O-" value="O_Negative" />
              <Picker.Item label="A+" value="A_Positive" />
              <Picker.Item label="A-" value="A_Negative" />
              <Picker.Item label="B+" value="B_Positive" />
              <Picker.Item label="B-" value="B_Negative" />
              <Picker.Item label="AB+" value="AB_Positive" />
              <Picker.Item label="AB-" value="AB_Negative" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity
          style={styles.becomeButtonContainer}
          onPress={() => {
            becomeDonorButtonHandler();
          }}>
          <Text style={styles.becomeButtonText}>Become Donor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fe6e58',
  },
  headerContainer: {
    height: '8%',
    width: '100%',
    alignItems: 'center',
    padding: 2,
    justifyContent: 'center',
  },
  headerText: {
    width: '88%',
    padding: 5,
    // fontFamily: 'AvenirLTStd-Book',
    fontSize: 18,
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '92%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    padding: 10,
  },
  becomeText: {
    // fontFamily: 'Helvetica-Bold-Font',
    fontSize: 18,
    color: '#1a1a1a',
    padding: 5,
  },
  inputConatiner: {
    width: '95%',
    padding: 2,
  },
  labelText: {
    padding: 3,
    color: '#4d4d4d',
  },
  textInput: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f2f2f2',
  },
  selectBox: {
    width: '100%',
    padding: 2,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  becomeButtonContainer: {
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#fe6e58',
    borderRadius: 7,
    marginTop: '10%',
    padding: 12,
  },
  becomeButtonText: {
    color: 'white',
    fontSize: 18,
  },
  errorMessage: {
    color: 'red',
  },
});
export default BecomeDonor;
