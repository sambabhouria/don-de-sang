import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

function FirstTime(props) {
  useEffect(() => {
    StatusBar.setBackgroundColor('#fe6e58');
  }, []);
  return (
    <Onboarding
      onDone={() => props.setGo(true)}
      onSkip={() => props.setGo(true)}
      pages={[
        {
          backgroundColor: '#fe6e58',
          image: (
            <Image
              style={{height: 200, width: 200}}
              source={require('../../assets/images/donate.png')}
            />
          ),
          title: 'Hayatian Blood Society',
          subtitle:
            'Welcome to Blood Donation Society. We take blood and deliver to patient with honest. We are waiting for your contribution in the mission.',
        },
        {
          backgroundColor: '#fe6e58',
          image: (
            <Image
              style={{height: 200, width: 200}}
              source={require('../../assets/images/donateblood.png')}
            />
          ),
          title: 'Donate Blood Save a Life',
          subtitle:
            'Welcome to Blood Donation Society. We take blood and deliver to patient with honest. We are waiting for your contribution in the mission.',
        },
        {
          backgroundColor: '#fe6e58',
          image: (
            <Image
              style={{height: 200, width: 200}}
              source={require('../../assets/images/pngwing.com.png')}
            />
          ),
          title: 'Join Our Community',
          subtitle:
            'Welcome to Blood Donation Society. We take blood and deliver to patient with honest. We are waiting for your contribution in the mission.',
        },
      ]}
    />
  );
}
export default FirstTime;
