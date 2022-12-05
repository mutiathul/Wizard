/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Wizard from './wizard';
AppRegistry.registerComponent(appName, () => Wizard);
