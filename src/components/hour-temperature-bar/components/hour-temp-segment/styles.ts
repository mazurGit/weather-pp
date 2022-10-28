import {StyleSheet} from 'react-native'
import {FONT_STYLES} from '~/styles/styles';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    width: 40,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  text: {
    ...FONT_STYLES.fontWeightRegular,
    fontSize: 15,
  }
})

export {styles};
