import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	Platform,
	Keyboard,
	ScrollView
} from 'react-native';
import Task from './components/Task.js';

export default function App() {
	const [task, setTask] = useState('');
	const [taskItems, setTaskItems] = useState([]);

	function handleAddTask() {
		if (task === '') {
			return;
		}

		Keyboard.dismiss();

		setTaskItems([...taskItems, task]);
		setTask('');
	}

	function completeTask(index) {
		let itemsCopy = [...taskItems];

		itemsCopy.splice(index, 1);

		setTaskItems(itemsCopy);
	}

	return (
		<View style={styles.mainContainer}>
			<StatusBar style='light' backgroundColor='#0B4F6C' />

			<View style={styles.taskWrapper}>
				<View>
					<Text style={styles.title}>Lista de Tareas</Text>
				</View>

				<ScrollView
					contentContainerStyle={{
						flexGrow: 1
					}}
					keyboardShouldPersistTaps='handled'
					style={styles.tasksScroll}>
					<View>
						{taskItems.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									onPress={() => completeTask(index)}>
									<Task text={item} />
								</TouchableOpacity>
							);
						})}
					</View>
				</ScrollView>

				<KeyboardAvoidingView
					ehavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.newTaskContainer}>
					<TextInput
						style={styles.inputText}
						placeholder='Agrega una tarea'
						value={task}
						onChangeText={text => setTask(text)}
					/>

					<TouchableOpacity onPress={() => handleAddTask()}>
						<View style={styles.addTaskButton}>
							<Text>+</Text>
						</View>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#FBFBFF'
	},

	taskWrapper: {
		flex: 1,
		paddingTop: 80,
		padding: 20
	},

	title: {
		color: '#0A0F0D',
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 25
	},

	tasksScroll: {
		maxHeight: 580
	},

	newTaskContainer: {
		position: 'absolute',
		width: '100%',
		bottom: 60,
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	inputText: {
		width: 275,
		padding: 15,
		paddingHorizontal: 20,
		borderWidth: 1,
		borderColor: '#58A4B0',
		borderRadius: 50,
		backgroundColor: '#FBFBFF'
	},

	addTaskButton: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: '#58A4B0'
	}
});
