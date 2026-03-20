import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, ScrollView, View } from 'react-native';

import { useI18n, useUser } from '@/hooks';
import { useTheme } from '@/theme';

import { AssetByVariant, TouchableIcon } from '@/components/atoms';
import { CustomHeader } from '@/components/molecules';
import { SafeScreen } from '@/components/templates';

const MAX_RANDOM_ID = 9;

function Example() {
  const { t } = useTranslation();
  const { useFetchOneQuery } = useUser();
  const { toggleLanguage } = useI18n();

  const {
    backgrounds,
    changeTheme,
    colors,
    components,
    fonts,
    gutters,
    layout,
    variant,
  } = useTheme();

  const [currentId, setCurrentId] = useState(-1);

  const fetchOneUserQuery = useFetchOneQuery(currentId);

  useEffect(() => {
    if (fetchOneUserQuery.isSuccess) {
      Alert.alert(
        t('screen_example.hello_user', { name: fetchOneUserQuery.data.name }),
      );
    }
  }, [fetchOneUserQuery.isSuccess, fetchOneUserQuery.data, t]);

  const handleResetError = () => {
    void fetchOneUserQuery.refetch();
  };

  return (
    <SafeScreen
      isError={fetchOneUserQuery.isError}
      onResetError={() => {
        handleResetError();
      }}
    >
      <CustomHeader
        headerRight={<TouchableIcon color='purple' name="theme" onPress={() => {}} />}

        title={t('songs')}
      />
      <ScrollView>
        <View
          style={[
            layout.justifyCenter,
            layout.itemsCenter,
            gutters.marginTop_80,
          ]}
        >
          <View
            style={[layout.relative, backgrounds.gray100, components.circle250]}
          />

          <View style={[layout.absolute, gutters.paddingTop_80]}>
            <AssetByVariant
              path="tom"
              resizeMode="contain"
              style={{ height: 300, width: 300 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Example;
