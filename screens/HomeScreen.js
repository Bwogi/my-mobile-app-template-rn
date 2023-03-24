import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<View className='flex-1 justify-center items-center'>
			<Text>Welcome: nXt date</Text>
			<Button
				title='Go to Chat Screen'
				onPress={() => navigation.navigate('Chat')}
			/>
		</View>
	);
};

export default HomeScreen;
