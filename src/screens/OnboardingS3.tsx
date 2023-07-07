import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  Border,
  FontSize,
  FontFamily,
  Color,
  Padding,
} from '../styles/GlobalStyles';

const OnboardingS3 = () => {
  return (
    <View style={styles.onboardingS3}>
      <View style={[styles.continueWrapper, styles.continueWrapperPosition]}>
        <Text style={styles.continue}>Get Started</Text>
      </View>
      <Text style={styles.igniteYourImagination}>
        Ignite Your Imagination with AI-Powered Artistry 🪄
      </Text>
      <Image
        style={[styles.heroIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require('../assets/hero-icon1.png')}
      />
      <View style={[styles.rectangleParent, styles.continueWrapperPosition]}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
      </View>
      <View style={styles.statusBarIphone1313Pr}>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/right-side.png')}
        />
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continueWrapperPosition: {
    flexDirection: 'row',
    width: 327,
    left: 24,
    position: 'absolute',
  },
  iconPosition: {
    left: '50%',
    position: 'absolute',
  },
  frameLayout: {
    marginLeft: 7,
    height: 3,
    borderRadius: Border.br_81xl,
    flex: 1,
  },
  timeLayout: {
    height: 21,
    width: 54,
    left: '50%',
    position: 'absolute',
  },
  continue: {
    fontSize: FontSize.size_lg,
    letterSpacing: -0.5,
    lineHeight: 23,
    fontFamily: FontFamily.interSemibold,
    color: Color.white,
    textAlign: 'center',
    fontWeight: '600',
    flex: 1,
  },
  continueWrapper: {
    top: 717,
    padding: Padding.p_base,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple_100,
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    width: 327,
    left: 24,
    position: 'absolute',
  },
  igniteYourImagination: {
    top: 529,
    fontSize: FontSize.size_15xl,
    letterSpacing: -1,
    lineHeight: 48,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    textAlign: 'left',
    width: 317,
    color: Color.labelColorLightPrimary,
    left: 24,
    position: 'absolute',
  },
  heroIcon: {
    marginTop: -269.08,
    marginLeft: -177.5,
    top: '50%',
    width: 356,
    height: 340,
  },
  frameChild: {
    backgroundColor: Color.gainsboro_100,
    height: 3,
    borderRadius: Border.br_81xl,
    flex: 1,
  },
  frameItem: {
    backgroundColor: Color.gainsboro_200,
  },
  frameInner: {
    backgroundColor: Color.purple_100,
  },
  rectangleParent: {
    top: 59,
    flexDirection: 'row',
    width: 327,
    left: 24,
    position: 'absolute',
  },
  rightSideIcon: {
    marginLeft: 102.17,
    top: 17,
    width: 67,
    height: 11,
  },
  text: {
    top: 1,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.sFUITextSemibold,
    height: 20,
    width: 54,
    left: 0,
    color: Color.labelColorLightPrimary,
    textAlign: 'center',
    fontWeight: '600',
    position: 'absolute',
  },
  time: {
    marginLeft: -27,
    top: 0,
    borderRadius: Border.br_5xl,
  },
  leftSide: {
    marginLeft: -163.5,
    top: 12,
  },
  statusBarIphone1313Pr: {
    top: -1,
    width: 375,
    height: 44,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  onboardingS3: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    width: '100%',
    height: 812,
    overflow: 'hidden',
    flex: 1,
  },
});

export default OnboardingS3;
