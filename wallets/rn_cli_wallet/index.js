/**
 * @format
 */

import './polyfills';
import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
