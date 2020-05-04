// RN handler
import 'react-native-gesture-handler';
// logbox
require('react-native').unstable_enableLogBox();
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Animated', 'componentWill']);
// imports default
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
