import {createAppContainer} from 'react-navigation';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import SplashScreen from '~/screens/splash';
import Home from '~/screens/Home';
import DetailScreen from '~/screens/Detail/index';
import PlayerScreen from '~/screens/Player';


const navigator = createSharedElementStackNavigator({
    home: Home,
    splash: SplashScreen,
    detail: DetailScreen,
    player: PlayerScreen,
}, {
    initialRouteName: 'splash', // Initial route,
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: () => ({
        header: undefined,

    }),
});

export default createAppContainer(navigator);
