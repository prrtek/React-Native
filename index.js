/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import AppPro from './AppPro';
import {name as appName} from './app.json';
// import ImageUse from './components/ImageUse';
// import Buttons from './components/Buttons';
import FlatCards from './components/FlatCards';
import Password from './components/Password';
import Bg from './components/Bg';
AppRegistry.registerComponent(appName, () => Bg);
