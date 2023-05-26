/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Linking, Platform, SafeAreaView, StyleSheet} from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';
import WebView from 'react-native-webview';

function App(): JSX.Element {
  // const appUri =
  //   'intent://mpocket.online.ansimclick#Intent;scheme=https;package=kr.co.samsungcard.mpocket;end;';
  // Linking.openURL(appUri);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'http://172.30.1.75:3000/payment'}}
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={request => {
          try {
            const {url} = request;
            console.log(`유알엘:: ${url}`);
            // if (url.startsWith('intent://') && Platform.OS === 'android') {
            // SendIntentAndroid.openChromeIntent(url);
            SendIntentAndroid.openAppWithUri(url);
          } catch (e) {
            console.log(`에러발생 ${e}`);
          } finally {
            return false;
          }
        }}
        javaScriptEnabled
        javaScriptCanOpenWindowsAutomatically
        thirdPartyCookiesEnabled
        cacheEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
