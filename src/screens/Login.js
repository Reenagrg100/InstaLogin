import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import InstagramLogin from 'react-native-instagram-login';
import CookieManager from '@react-native-community/cookies';
import {Success} from './success';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  setIgToken = data => {
    console.log('data', data);
    this.setState({token: data.access_token});
  };

  onClear = async () => {
    console.log('On clear');
    CookieManager.clearAll(true).then(res => {
      console.log('Res:', res);
      this.setState({token: null});
    });
  };

  render() {
    const {token} = this.state;
    return (
      <React.Fragment>
        {!token ? (
          <React.Fragment>
            <View style={{marginTop: 50, marginLeft: 20}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                Instagram Login!
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.instagramLogin.show()}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Login with Instagram
                </Text>
              </TouchableOpacity>

              {/* Shift these credentials into a separate .env file. But I'm keeping here so that everyone can test it out at their end. */}
              <InstagramLogin
                ref={ref => (this.instagramLogin = ref)}
                appId="794714441436593"
                appSecret="d6473a130fa9a9ac9b2259608b839ba9"
                redirectUrl="https://localhost:3000/"
                scopes={['user_profile', 'user_media']}
                onLoginSuccess={this.setIgToken}
                onLoginFailure={data => console.log(data)}
              />
            </View>
          </React.Fragment>
        ) : (
          <Success token={token} onLogout={this.onClear} />
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: 'blue',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
