import React, { Component } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { colors, fonts, screenWidth } from '../../res/style/theme';
import Header from '../custom/Header';
import Images from '../../res/image';
const dataColor = [
  { title: 'Xanh dương', color: colors.blue },
  { title: 'Xanh lá', color: colors.green },
  { title: 'Xanh rêu', color: colors.lime },
  { title: 'Xanh ngọc', color: colors.cyan },
  { title: 'Đỏ', color: colors.red1 },
  { title: 'Vàng', color: colors.yellow1 },
  { title: 'Tím', color: colors.purple1 },
  { title: 'Cam', color: colors.orange },
  { title: 'Hồng', color: colors.pink2 },
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          isShowMenu
          onPressMenu={() => this.props.navigation.openDrawer()}
          title="<==== Xem menu tại đây"
        />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <Image style={styles.img} source={Images.ic_beauty} />

          <Item
            title="Màu sắc"
            onPress={() => Alert.alert("Thông báo", "Làm cho vui thôi chứ không có tác dụng gì.\n (^ . ^)")}
          />
          <Item title="Menu ở ↑, nhỏ mắt trước khi xem nha" onPress={() => Alert.alert("Thông báo", "Làm cho vui thôi chứ không có tác dụng gì.\n (^ . ^)")}>
          </Item>
        </ScrollView>
      </View>
    );
  }
}
const Item = props => (
  <TouchableOpacity onPress={() => props.onPress()} style={styles.item}>
    <Text style={styles.txtTitle}>{props.title}</Text>
    {props.children}
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    padding: 16,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.black,
  },
  img: {
    alignSelf: 'center',
  },
});
