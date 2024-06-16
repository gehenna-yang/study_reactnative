import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import useAuth from '~/hooks/queries/useAuth';

function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>맵 스크린</Text>
        <Button title="로그아웃" onPress={() => logoutMutation.mutate(null)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MapHomeScreen;
