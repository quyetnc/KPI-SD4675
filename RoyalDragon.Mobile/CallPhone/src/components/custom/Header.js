import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '../../res/style/theme';
import StatusBarView from './StatusBarView';

const Header = props => {
  const iconBack = () => (
    <Pressable
      android_ripple={{color: colors.black_transparent, borderless: true}}
      style={styles.iconBack}
      onPress={() => props.onPressBack()}>
      {/* <Icon name="arrow-left" size={20} color={colors.white} /> */}
    </Pressable>
  );
  const iconSave = () => (
    <Pressable
      android_ripple={{color: colors.black_transparent, borderless: true}}
      style={styles.iconRight}
      onPress={() => props.onPressSave()}>
      {/* <Icon name="search" size={20} color={colors.white} /> */}
    </Pressable>
  );

  const iconOption = () => (
    <Pressable
      android_ripple={{color: colors.black_transparent, borderless: true}}
      style={styles.iconRightSecond}
      onPress={() => props.onPressOption()}>
      {/* <Icon name="list-ol" size={20} color={colors.white} /> */}
    </Pressable>
  );
  const iconMenu = () => (
    <Pressable
      android_ripple={{color: colors.black_transparent, borderless: true}}
      style={styles.iconBack}
      onPress={() => props.onPressMenu()}>
      {/* <Icon name="bars" size={20} color={colors.white} /> */}
    </Pressable>
  );
  //////////////////////////////////
  return (
    <View>
      <StatusBarView />
      <View style={[styles.container, {backgroundColor: colors.app}]}>
        {props.isShowMenu ? iconMenu() : null}
        {props.isShowBack ? iconBack() : null}
        <Text style= {[styles.title, props.isDrawer && {color : 'red'}]} >{props.title}</Text>
        {props.isShowOption ? iconOption() : null}
        {props.isShowSave ? iconSave() : null}
        {props.isScanIQC ? IconScanIQC() : null}
        {props.isStartLine ? IconStartLine() : null}
        {props.isCancel ? IconCancel() : null}
      </View>
    </View>
  );
};

export default Header;
Header.defaultProps = {
  onPressBack: () => {},
  onPressMenu: () => {},
};
const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  iconBack: {
    position: 'absolute',
    left: 0,
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRight: {
    position: 'absolute',
    right: 0,
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRightSecond: {
    position: 'absolute',
    right: 48,
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
