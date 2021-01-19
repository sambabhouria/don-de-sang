import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.coverParent}>
          <View style={styles.coverTextContainer}>
            <Text style={styles.coverText}>
              Hayatian's Blood Society is working as community of peop are
              willing to help each other. We have collected over 1000 bags of
              blood in last 3 years.
            </Text>
          </View>
        </View>

        <View style={styles.donationParent}>
          <View style={styles.donationContainer}>
            <View style={styles.donationImageContainer}>
              <Image
                style={styles.donationImage}
                source={require('../../assets/images/donateblood.png')}
              />
            </View>
            <View style={styles.donationTextContainer}>
              <Text style={styles.dontationNumber}>233 </Text>
              <Text style={styles.donationText}>
                total donors registered with us. Do you want to help others?
              </Text>
            </View>
          </View>
          <View style={styles.donationButtonContainer}>
            <TouchableOpacity
              style={styles.donationButton}
              onPress={() => {
                navigation.navigate('BecomeDonor');
              }}>
              <Text style={styles.donationButtonText}>Become a Donor</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.donationParent}>
          <View style={styles.donationContainer}>
            <View style={styles.donationImageContainer}>
              <Image
                style={styles.donationImage}
                source={require('../../assets/images/pngwing.com.png')}
              />
            </View>
            <View style={styles.donationTextContainer}>
              <Text style={styles.dontationNumber}>Need Blood? </Text>
              <Text style={styles.donationText}>
                We are here to help you. Please make a request for blood.
              </Text>
            </View>
          </View>
          <View style={styles.donationButtonContainer}>
            <TouchableOpacity
              style={styles.donationButton}
              onPress={() => {
                navigation.navigate('RequestBlood');
              }}>
              <Text style={styles.donationButtonText}>Request Blood</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.donationParent}>
          <View style={styles.donationContainer}>
            <View style={styles.donationImageContainer}>
              <Image
                style={styles.donationImage}
                source={require('../../assets/images/pngwing.com.png')}
              />
            </View>
            <View style={styles.donationTextContainer}>
              <Text style={styles.dontationNumber}>233 </Text>
              <Text style={styles.donationText}>
                total donors registered with us. Do you want to help others?
              </Text>
            </View>
          </View>
          <View style={styles.donationButtonContainer}>
            <TouchableOpacity style={styles.donationButton}>
              <Text style={styles.donationButtonText}>Become a Donor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex:1,
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: '#fe6e58',
  },
  coverParent: {
    borderRadius: 0,
    backgroundColor: '#fe6e58',
    width: '100%',
  },
  coverTextContainer: {
    width: '100%',
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"#000"
  },
  coverText: {
    color: '#f2f2f2',
    // fontFamily: 'AvenirLTStd-Roman',
    fontSize: 18,
    lineHeight: 20,
    // fontSize:40,
  },

  donationParent: {
    borderRadius: 12,
    backgroundColor: '#fff',
    width: '95%',
    marginBottom: 15,
  },
  donationContainer: {
    flexDirection: 'row',
  },
  donationImage: {
    width: 150,
    height: 150,
  },
  donationButtonContainer: {
    alignItems: 'flex-end',
  },

  donationButton: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 10,
    width: '40%',
    marginRight: '5%',
    alignItems: 'center',
    borderRadius: 5,
  },
  donationButtonText: {
    color: '#fff',
    // fontFamily: 'Helvetica-Bold-Font',
  },
  donationImageContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"#f2f2f2",
  },
  donationTextContainer: {
    width: '50%',
    flexDirection: 'column',
    padding: 20,

    // backgroundColor:"#000"
  },
  donationText: {
    color: '#000',
    // fontFamily: 'AvenirLTStd-Roman',
    fontSize: 18,

    // fontSize:40,
  },
  dontationNumber: {
    // fontFamily: 'Helvetica-Bold-Font',
    color: '#000',
    fontSize: 25,
    // backgroundColor:"#000",
    // textAlign : "center",
  },
});

export default HomeScreen;
