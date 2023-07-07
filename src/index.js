/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import {AppRegistry, Platform} from 'react-native';
import App from './App';

AppRegistry.registerComponent('stabo', () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('stabo');
  AppRegistry.runApplication('stabo', {rootTag});
}
