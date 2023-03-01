import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task({ text }) {
	return (
		<View style={styles.taskBox}>
			<View style={styles.leftContent}>
				<View style={styles.square} />
				<Text style={styles.taskText}>{text}</Text>
			</View>

			<View style={styles.circle}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	taskBox: {
		padding: 20,
		marginBottom: 20,
		backgroundColor: '#0B4F6C',
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	leftContent: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	taskText: {
		maxWidth: '80%',
		fontSize: 15,
		color: '#FBFBFF'
	},

	square: {
		width: 24,
		height: 24,
		marginRight: 15,
		backgroundColor: '#FBFBFF',
		opacity: 0.4,
		borderRadius: 5
	},

	circle: {
		width: 20,
		height: 20,
		borderWidth: 2,
		borderColor: '#FAFAFA',
		borderRadius: 50
	}
});
