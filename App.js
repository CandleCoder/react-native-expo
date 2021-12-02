import React from 'react';
import {View} from 'react-native';
import Todo from "./components/Todo";
import state from './store/store'
import {Provider} from "react-redux";


export default function App() {
    return (
        <Provider store={state}>
            <View>
                <Todo/>
            </View>
        </Provider>
    );
}
