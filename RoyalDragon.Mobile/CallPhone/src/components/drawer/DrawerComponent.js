import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import Images from '../../res/image';
import { colors, fonts } from '../../res/style/theme';
// import Header from '../custom/Header';
import ItemGroup from './ItemGroup';
import moment from 'moment';

const listMenu = [
  {
    id: 1,
    title: 'Tra cứu cá nhân',
    icon: Images.ic_user,
    screen: 'PersonalLookup',
    type: 'item',
  },
  {
    id: 2,
    title: 'Chi tiết quá trình',
    icon: Images.ic_chart_detail,
    screen: 'ProcessDetail',
    type: 'item',
  },
  {
    id: 3,
    title: 'Tra cứu định danh',
    icon: Images.ic_student,
    screen: 'IdentifyLookup',
    type: 'item',
  }
];

export default class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { idOpen: -1 };
  }
  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        console.log('ok');
      },
    );
  }
  renderMenu = ({ item, index }) => (
    <ItemGroup
      {...this.props}
      value={item}
      idOpen={this.state.idOpen}
      setOpen={val => this.setState({ idOpen: val })}
    />
    // <Pressable
    //   android_ripple={{color: colors.black_transparent}}
    //   onPress={() => {
    //     if (item.screen === '') {
    //       Alert.alert('Thông báo', 'Chức năng đang được cập nhật');
    //     } else {
    //       this.props.navigation.navigate(item.screen);
    //     }
    //   }}>
    //   <View style={styles.itemMenu}>
    //     <Image style={styles.icon} source={item.icon} />
    //     <Text style={styles.txtMenu}>{item.title}</Text>
    //   </View>
    // </Pressable>
  );
  logOut = () => {
    Alert.alert('Thông báo', 'Bạn chắc chắn đăng xuất?', [
      { text: 'Huỷ', style: 'cancel' },
      {
        text: 'OK',
        onPress: async () => {
          try {
            const jsonValue = JSON.stringify({
              username: userData.username,
              password: '',
            });
            await AsyncStorage.setItem('@saveLogin', jsonValue);
            await AsyncStorage.setItem('@biometric', 'off');
          } catch (e) {
            // saving error
          }
          this.props.navigation.replace('Login');
          this.props.logoutAction();
        },
      },
    ]);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Header title={`Xin chào: ${userData.userName}`} isDrawer /> */}
        <FlatList
          data={listMenu}
          keyExtractor={(item, index) => String(index)}
          renderItem={this.renderMenu}
          ListFooterComponent={
            <View>
              <Pressable
                android_ripple={{ color: colors.black_transparent }}
                style={styles.itemMenu}
                onPress={this.logOut}>
                <Image style={styles.icon} source={Images.ic_exit} />
                <Text style={styles.txtMenu}>Đăng xuất</Text>
              </Pressable>
              <View
                android_ripple={{ color: colors.black_transparent }}
                style={styles.itemMenu}
              >
                <Image style={styles.icon} source={Images.ic_bonus} />
                <Text style={styles.txtMenu}>Hết hạn : <Text style={{ fontWeight: 'bold', color: 'red' }}>{
                  moment(userData.license).format(
                    'DD/MM/YYYY',
                  )
                }</Text></Text>
              </View>
              <View
                android_ripple={{ color: colors.black_transparent }}
                style={styles.itemMenu}
              >
                <Image style={styles.icon} source={Images.ic_standard_Info} />
                <Text style={styles.txtMenu}>Loại tài khoản: {userData.isPremium? <Text style={{ fontWeight: 'bold', color: 'red' }}>Premium</Text>:<Text>Normal</Text>}</Text>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: colors.gray2,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
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
