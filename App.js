/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
	return (
		<View style={styles.body}>
			<Text style={styles.text}>Hi</Text>
			<Button
				title="Press me"
				onPress={() => {
					Linking.openURL('https://youtube.com');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#ff00ff',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	text: {
		color: '#ffffff',
		fontSize: 20,
		margin: 10
	}
});

export default App;
