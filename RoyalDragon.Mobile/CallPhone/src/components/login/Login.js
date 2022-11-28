import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Animated,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Images from '../../res/image';
import { colors, fonts, screenWidth } from '../../res/style/theme';
import StatusBarView from '../custom/StatusBarView';
import TextInputAnimated from '../custom/TextInputAnimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingView from '../custom/LoadingView';
import { emtyValue } from '../../res/function/Functions';
// import TouchID from 'react-native-touch-id';
import { userData } from '../../config/Config';
import { setting } from '../../config/Constant';
import size from '../../res/style/size';
import DeviceInfo from 'react-native-device-info';
import { API_URL_CONFIG } from '../../config/Config';
// import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
const logoSize = screenWidth * 0.7;
const duration = 200;

// const fingerConig = {
//    title: 'Xác thực vân tay',
//    imageColor: colors.blue,
//    imageErrorColor: colors.red,
//    sensorDescription: 'Chạm vào cảm biến',
//    sensorErrorDescription: 'Vân tay không đúng',
//    cancelText: 'Hủy bỏ',
// };

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      deviceName: '',
      saveLogin: false,
    };
    this.backTimer = null;
    this.backCount = 0;
    this.zoomLogo = new Animated.Value(0);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
  }
  async componentDidMount() {
    DeviceInfo.getDeviceName().then((deviceName) => {
      this.setState({
        deviceName: deviceName
      });
    });
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
    this.getValueLogin();
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  keyboardDidShow() {
    this.zoomOutLogo();
  }
  keyboardDidHide() {
    this.zoomInLogo();
  }
  //thu nho logo
  zoomOutLogo = () => {
    Animated.timing(this.zoomLogo, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  //phong to logo
  zoomInLogo = () => {
    Animated.timing(this.zoomLogo, {
      toValue: 0,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  // xác định dt có hỗ trợ vân tay ko
  //  isSupportBio = () => {
  //     const optionalConfigObject = {
  //        unifiedErrors: false, // use unified error messages (default false)
  //        passcodeFallback: true, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
  //     };
  //     TouchID.isSupported(optionalConfigObject)
  //        .then((biometryType) => {
  //           //nếu dt hỗ trợ vân tay/face id
  //           userData.BIOMETRICS = biometryType;
  //           this.getValueBio();
  //        })
  //        .catch((error) => {
  //           // nếu dt ko hỗ trợ vân tay/face id thì login bình thường
  //           userData.BIOMETRICS = '';
  //           this.getValueLogin();
  //        });
  //  };

  //get username and password remember login
  getValueLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@saveLogin');
      const securityValue = await AsyncStorage.getItem('@securityCode');
      if (jsonValue != null) {
        var data = JSON.parse(jsonValue);
        this.setState({
          username: data.username,
          password: data.password,
          saveLogin: true,
        });
        // if (!emtyValue(data.password) && !emtyValue(data.username)) {
        //   this.props.loginAction(data.username, data.password, securityValue);
        // }
      }
    } catch (e) {
      // error reading value
    }
  };
  onChangeUsername = text => {
    this.setState({ username: text });
  };
  onClearUsername = () => {
    this.setState({ username: '' });
  };
  onClearPassword = () => {
    this.setState({ password: '' });
  };
  onChangePassword = text => {
    this.setState({ password: text });
  };

  //remember login
  onPressSaveLogin = () => {
    this.setState({ saveLogin: !this.state.saveLogin }, async () => {
      if (!this.state.saveLogin) {
        try {
          await AsyncStorage.removeItem('@saveLogin');
        } catch (e) {
          // remove error
        }
      }
    });
  };
  saveLogin = async (securityCode) => {
    await AsyncStorage.setItem('@securityCode', securityCode);
    if (this.state.saveLogin) {
      try {
        const jsonValue = JSON.stringify({
          username: this.state.username,
          password: this.state.password
        });
        await AsyncStorage.setItem('@saveLogin', jsonValue);
      } catch (e) {
        // saving error
      }
    }
  };
  //press login
  onPressLogin = async () => {
    if (this.state.username === '' || this.state.password === '') {
      // Alert.alert('Lưu ý', 'Bạn phải nhập đầy đủ thông tin đăng nhập');
      this.props.showAlertAction('warn', setting.fillErrorLogin);
    } else {
      // this.props.navigation.navigate('Home');
      const securityValue = await AsyncStorage.getItem('@securityCode');
      this.props.loginAction(this.state.username, this.state.password, securityValue,this.state.deviceName);
    }
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.success !== null &&
      this.props.success !== prevProps.success
    ) {
      if (this.props.success == true) {
        console.log("his.props.data", this.props.data);
        this.saveLogin(this.props.data.user.securityCode);
        this.props.navigation.replace('Home');
      } else {
        this.props.showAlertAction('error', this.props.message['en']);
      }
    }
    if (this.props.error !== null && this.props.error !== prevProps.error) {
      setTimeout(() => {
        this.props.showAlertAction('error', this.props.error);
      }, 10);
    }
  }
  render() {
    const logoWidth = this.zoomLogo.interpolate({
      inputRange: [0, 1],
      outputRange: [logoSize, logoSize / 1.2],
    });
    const logoHeight = this.zoomLogo.interpolate({
      inputRange: [0, 1],
      // outputRange: [logoSize * 0.65, (logoSize * 0.65) / 2],
      outputRange: [logoSize, (logoSize * 0.65) / 1.2],
    });
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <StatusBarView />
        <LoadingView visible={this.props.loading} />
        {/* <LoadingView visible={false} /> */}
        <View style={{ flex: 1, paddingTop: size.s40 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.backCount++;
              console.log(this.backCount);
              if (this.backCount == 5) {
                clearTimeout(this.backTimer);
                if (API_URL_CONFIG.API_URL == 'http://demo.api.dsvinames.com') {
                  API_URL_CONFIG.API_URL = 'http://api.dsvinames.com';
                  API_URL_CONFIG.API_URL_TOKEN =
                    'http://api.dsvinames.com/Login';
                  this.props.showAlertAction(
                    'success',
                    'Using api.dsvinames.com',
                  );
                } else {
                  API_URL_CONFIG.API_URL = 'http://demo.api.dsvinames.com';
                  API_URL_CONFIG.API_URL_TOKEN =
                    'http://demo.api.dsvinames.com/Login';
                  this.props.showAlertAction(
                    'success',
                    'Using demo.api.dsvinames.com',
                  );
                }
              } else {
                this.backTimer = setTimeout(() => {
                  this.backCount = 0;
                }, 3000);
              }
            }}>
            <Animated.Image
              resizeMode="contain"
              source={Images.dongsunglogo}
              style={[styles.logo, { height: logoHeight, width: logoWidth }]}
            />
          </TouchableWithoutFeedback>

          {/* /////////////////////////// */}
          {/* <Text style={styles.login}>Dongsung Vina</Text> */}
          <TextInputAnimated
            label="Tài khoản"
            style={styles.input}
            value={this.state.username}
            onChangeText={this.onChangeUsername}
            onPressClear={this.onClearUsername}
          />
          <TextInputAnimated
            isPassword
            style={styles.input}
            label="Mật khẩu"
            value={this.state.password}
            onChangeText={this.onChangePassword}
            onPressClear={this.onClearPassword}
          />
          {/* ////////////////////////// */}
          <TouchableOpacity style={styles.save} onPress={this.onPressSaveLogin}>
            {/* <FontAwesome5Icon
              name={this.state.saveLogin ? 'check-circle' : 'circle'}
              size={16}
              color={colors.app}
            /> */}
            <Text style={[styles.txtSave, { color: colors.app }]}>
              Nhớ mật khẩu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnLogin, { backgroundColor: colors.app }]}
            onPress={this.onPressLogin}>
            <Text style={styles.txtBtnLogin}>Đăng nhập</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
          style={[styles.btnLogin, {backgroundColor: colors.green1}]}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.txtBtnLogin}>Đăng ký</Text>
        </TouchableOpacity> */}
          {/* //////////// FOOTER ////////// */}

          {/*             
            <View style={styles.footerView}>
               <TouchableOpacity>
                  <Image source={Images.ic_facebook} style={styles.sizeIcon} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => alert('Tính năng đang được cập nhật')}>
                  <Image source={Images.ic_gmail} style={styles.sizeIcon} />
               </TouchableOpacity>
                
            </View> */}

          {/* 
               <TouchableOpacity
                  style={styles.subView}
                  onPress={() => this.props.navigation.navigate('Forget')}>
                  <Text style={styles.txtsignup}>Quên mật khẩu</Text>
               </TouchableOpacity>
                */}
        </View>
        {/* /////////logo////////// */}
        <Text style={styles.version}>Version 1.2.16</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    marginTop: 20,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
  },
  login: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blue,
    textAlign: 'center',
    marginVertical: 16,
  },
  btnLogin: {
    height: 44,
    backgroundColor: colors.app,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 50,
  },
  txtBtnLogin: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.bold,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  subView: {
    height: 44,
    borderRadius: 50,
    backgroundColor: colors.green1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '47%',
  },
  txtsignup: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.semibold,
  },
  save: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    marginTop: 12,
  },
  txtSave: {
    fontSize: 16,
    color: colors.app,
    marginLeft: 8,
    fontFamily: fonts.medium,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  sizeIcon: {
    height: 80,
    width: 80,
  },
  version: {
    fontSize: 16,
    color: colors.app,
    alignSelf: 'center',
    fontFamily: fonts.bold,
  },
});
