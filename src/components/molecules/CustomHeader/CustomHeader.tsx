import { ReactNode } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

type Props = {
  readonly headerRight?: ReactNode;
  readonly title: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'rgb(224,224,224)',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Platform.OS === 'android' ? 16 : undefined,
    position: 'relative',
    shadowColor: 'rgb(224, 224, 224)',
  },
  headerRight: {
    bottom: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    color: 'rgb(28, 28, 30)',
    flex: 1,
    fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : undefined,
    fontSize: Platform.OS === 'android' ? 20 : 17,
    fontWeight: Platform.OS === 'android' ? 'normal' : '600',
    paddingVertical: 14.5,
    textAlign: Platform.OS === 'ios' ? 'center' : undefined,
  },
});

function CustomHeader({ headerRight = undefined, title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.headerRight}>{headerRight}</View>
    </View>
  );
}

export default CustomHeader;
