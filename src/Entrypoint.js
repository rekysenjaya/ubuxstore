import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { PersistGate } from 'redux-persist/es/integration/react';
import NavigationStack from 'src/navigation';
import configureStore from 'src/store/configureStore';
import SplashScreen from 'react-native-splash-screen'
const { persistor, store } = configureStore();

export default class Entrypoint extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Root>
                        <NavigationStack />
                    </Root>
                </PersistGate>
            </Provider>
        );
    }
}
