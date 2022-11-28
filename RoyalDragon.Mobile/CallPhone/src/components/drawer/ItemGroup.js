import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import {
  Pressable,
  View,
  Text,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  Platform,
  UIManager,
  LayoutAnimation,
  Button,
  Alert,
} from 'react-native';
import {colors, fonts} from '../../res/style/theme';
import size from '../../res/style/size';
import image from '../../res/image';
// import RoomItem from './RoomItem';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ItemGroup = forwardRef((props, ref) => {
  const {value} = props;
  const [isShowMenu1, setIsShowMenu1] = useState(false);
  const [isShowMenu2, setIsShowMenu2] = useState(-1);
  const [render, callrender] = useState(false);
  const animatedGroup = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   if (isShowDetail) {
  //     Animated.timing(animatedGroup, {
  //       toValue: 1,
  //       duration: 500,
  //       useNativeDriver: false
  //     }).start()
  //   } else {
  //     Animated.timing(animatedGroup, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: false
  //     }).start()
  //   }
  const RenderMinItem = listChildMin => {
    let rs = [];
    listChildMin.map(x =>
      rs.push(
        <Pressable
          android_ripple={{color: colors.black_transparent}}
          key={x.id}
          onPress={() => {
            x.screen == ''
              ? Alert.alert('Notification'," setting.comingSoon")
              : props.navigation.navigate(x.screen);
          }}>
          <View style={styles.itemMenu3}>
            <Image style={styles.icon} source={x.icon} />
            <Text style={styles.txtMenu}>{x.title}</Text>
          </View>
        </Pressable>,
      ),
    );
    return rs;
  };
  // }, [isShowDetail])
  // useEffect(() => {
  //   if (value.type == 'group') {
  //     let arrHandle = [];
  //     value.children.forEach(e => {
  //       arrHandle.push({id: e.id, status: false});
  //     });
  //     setIsShowMenu2(arrHandle);
  //   }
  // }, []);
  useEffect(() => {}, [render]);
  useEffect(() => {
    if (props.idOpen == value.id) {
      setIsShowMenu1(true);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      setIsShowMenu1(false);
    }
  }, [props.idOpen]);

  useEffect(() => {
    if (isShowMenu1 == false) {
      setIsShowMenu2(-1);
    }
  }, [isShowMenu1]);
  return (
    <View>
      <Pressable
        android_ripple={{color: colors.black_transparent}}
        onPress={() => {
          value.type == 'group'
            ? props.idOpen == value.id
              ? props.setOpen(-1)
              : props.setOpen(value.id)
            : value.screen == ''
            ? Alert.alert('Notification'," setting.comingSoon")
            : props.navigation.navigate(value.screen);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }}>
        <View style={styles.itemMenu}>
          <Image style={styles.icon} source={value.icon} />
          <Text style={styles.txtMenu}>{value.title}</Text>
        </View>
      </Pressable>

      {isShowMenu1 && (
        <Animated.View
          style={
            {
              // flex: 1,
              // flexDirection: 'row',
              // flexWrap: 'wrap',
              // justifyContent: 'space-between',
              // width: animatedGroup.interpolate({
              //   inputRange: [0, 1],
              //   outputRange: ['100%', '100%'],
              // }),
            }
          }>
          <FlatList
            extraData={isShowMenu2}
            data={value.children}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item, index}) => {
              return (
                <>
                  <Pressable
                    android_ripple={{color: colors.black_transparent}}
                    key={index}
                    onPress={() => {
                      if (value.type == 'group') {
                        isShowMenu2 == item.id
                          ? setIsShowMenu2(-1)
                          : setIsShowMenu2(item.id);

                        callrender(!render);
                      } else
                        value.screen == ''
                          ? Alert.alert('Notification', "setting.comingSoon")
                          : props.navigation.navigate(value.screen);
                      LayoutAnimation.configureNext(
                        LayoutAnimation.Presets.easeInEaseOut,
                      );
                    }}>
                    <View style={styles.itemMenu2}>
                      <Image style={styles.icon} source={item.icon} />
                      <Text style={styles.txtMenu}>{item.title}</Text>
                    </View>
                  </Pressable>
                  <>{isShowMenu2 == item.id && RenderMinItem(item.children)}</>
                </>
              );
            }}
          />
        </Animated.View>
      )}
    </View>
  );
});

ItemGroup.defaultProps = {};

export default ItemGroup;
const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: colors.gray2,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  itemMenu2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: colors.green1,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingLeft: 35,
  },
  itemMenu3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: colors.orange1,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingLeft: 70,
  },
  txtMenu: {
    fontSize: 16,
    marginLeft: 16,
    fontFamily: fonts.medium,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
