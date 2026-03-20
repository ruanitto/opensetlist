import { StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

import IconByVariant from '../IconByVariant/IconByVariant';

type Props = {
  readonly color?: string
  readonly iconStyle?: StyleProp<ViewStyle>
  readonly name: string
  readonly size?: number
} & TouchableOpacityProps

const styles = StyleSheet.create({
  iconPadding: {
    padding: 10
  }
})

function TouchableIcon(props: Props) {
// eslint-disable-next-line no-magic-numbers
const { color, iconStyle, name, size = 30 } = props

  return (
    <TouchableOpacity {...props}>
      <IconByVariant path={name} stroke={color}
        style={[styles.iconPadding, iconStyle]} 
        width={size} />
    </TouchableOpacity>
  )
}

export default TouchableIcon