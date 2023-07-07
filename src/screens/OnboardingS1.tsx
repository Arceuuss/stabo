//@ts-nocheck
import * as React from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Padding,
  Border,
  FontSize,
  FontFamily,
  Color,
} from '../styles/GlobalStyles';

const OnboardingS1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingS1}>
      <Pressable
        style={[styles.getStartedWrapper, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate('OnboardingS2')}>
        <Text style={styles.getStarted}>Get Started</Text>
      </Pressable>
      <Text style={styles.transformYourConcepts}>
        Transform your concepts into tangible outcomes.
      </Text>
      <View style={styles.heroIcon}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/icon.png')}
        />
        <Image
          style={[styles.heroIconChild, styles.heroIconLayout]}
          resizeMode="cover"
          source={require('../assets/ellipse-1844.png')}
        />
        <View
          style={[styles.generateImagesEasilyWrapper, styles.wrapperPosition]}>
          <Text style={styles.generateImagesEasily}>
            🤩 Generate images easily!
          </Text>
        </View>
        <Image
          style={[styles.heroIconItem, styles.heroIconLayout]}
          resizeMode="cover"
          source={require('../assets/ellipse-1845.png')}
        />
        <View style={[styles.topDes, styles.topDesPosition]}>
          <View
            style={[
              styles.fastAndCanBeDirectlyDownlWrapper,
              styles.wrapperPosition,
            ]}>
            <Text style={styles.generateImagesEasily}>
              Fast and can be directly downloaded!!
            </Text>
          </View>
          <View
            style={[styles.rectangleParent, styles.rectangleParentPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.groupItem, styles.topDesPosition]} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <View
        style={[styles.statusBarIphone1313Pr, styles.rectangleParentPosition]}>
        <Image
          style={styles.rightSideIcon}
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
  rectangleGroupPosition: {
    flexDirection: 'row',
    width: 327,
    left: 24,
    position: 'absolute',
  },
  heroIconLayout: {
    height: 108,
    width: 108,
    position: 'absolute',
  },
  wrapperPosition: {
    padding: Padding.p_3xs,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    transform: [
      {
        rotate: '15deg',
      },
    ],
    flexDirection: 'row',
    position: 'absolute',
  },
  topDesPosition: {
    left: 0,
    position: 'absolute',
  },
  rectangleParentPosition: {
    height: 44,
    left: 0,
    position: 'absolute',
  },
  frameLayout: {
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
  getStarted: {
    fontSize: FontSize.size_lg,
    letterSpacing: -0.5,
    lineHeight: 23,
    fontFamily: FontFamily.interSemibold,
    textAlign: 'center',
    fontWeight: '600',
    color: Color.white,
    flex: 1,
  },
  getStartedWrapper: {
    top: 717,
    padding: Padding.p_base,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple_100,
    borderRadius: Border.br_81xl,
  },
  transformYourConcepts: {
    top: 529,
    fontSize: FontSize.size_15xl,
    letterSpacing: -1,
    lineHeight: 48,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    width: 317,
    textAlign: 'left',
    color: Color.labelColorLightPrimary,
    left: 24,
    position: 'absolute',
  },
  icon: {
    top: 27,
    left: 1,
    width: 356,
    height: 333,
    position: 'absolute',
  },
  heroIconChild: {
    top: 265,
    left: 23,
  },
  generateImagesEasily: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    lineHeight: 16,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    textAlign: 'left',
    color: Color.white,
  },
  generateImagesEasilyWrapper: {
    top: 311,
    left: 165,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: 'rgba(117, 10, 87, 0.5)',
    transform: [
      {
        rotate: '15deg',
      },
    ],
  },
  heroIconItem: {
    top: 76,
    left: 259,
  },
  fastAndCanBeDirectlyDownlWrapper: {
    top: 60,
    left: 97,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: [
      {
        rotate: '15deg',
      },
    ],
  },
  groupChild: {
    top: 30,
    left: 4,
    backgroundColor: '#917f8d',
    width: 115,
    height: 6,
    transform: [
      {
        rotate: '15deg',
      },
    ],
    position: 'absolute',
  },
  groupItem: {
    top: 31,
    width: 40,
    height: 14,
    transform: [
      {
        rotate: '15deg',
      },
    ],
    backgroundColor: Color.purple_100,
    borderRadius: Border.br_81xl,
  },
  rectangleParent: {
    top: 55,
    width: 117,
  },
  topDes: {
    width: 329,
    height: 99,
    top: 0,
  },
  heroIcon: {
    top: 95,
    left: 8,
    width: 367,
    height: 389,
    position: 'absolute',
  },
  frameChild: {
    backgroundColor: Color.purple_100,
  },
  frameItem: {
    backgroundColor: Color.gainsboro_200,
    marginLeft: 7,
  },
  rectangleGroup: {
    top: 59,
  },
  rightSideIcon: {
    marginLeft: 102.17,
    top: 17,
    width: 67,
    height: 11,
    left: '50%',
    position: 'absolute',
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
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -163.5,
    top: 12,
  },
  statusBarIphone1313Pr: {
    top: -1,
    width: 375,
    overflow: 'hidden',
  },
  onboardingS1: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    width: '100%',
    height: 812,
    overflow: 'hidden',
    flex: 1,
  },
});

export default OnboardingS1;
