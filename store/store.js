import { createSlice, configureStore } from '@reduxjs/toolkit';

const store = createSlice({
	name: 'message',
	initialState: {
		todo: [
			{
				id: new Date().toString(),
				title: 'Default Todo From Store',
				data: new Date().toLocaleTimeString(),
				checked: false
			}
		]
	},
	reducers: {
		ADD_TODO(state, action) {
			state.todo.push(action.payload);
		},

		REMOVE_TODO(state, action) {
			state.todo = state.todo.filter((todo) => todo.id !== action.payload);
		},

		COMPLETE_TODO(state, action) {
			state.todo = state.todo.map((todo) => {
				if (todo.id === action.payload) todo.checked = !todo.checked;
				return todo;
			});
		},

		EDIT_TODO(state, action) {
			state.todo = state.todo.map((todo) => {
				if (todo.id == action.payload.editingTodoID) todo.title = action.payload.editingTitle;
				return todo;
			});
		}
	}
});

const state = configureStore({
	reducer: store.reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, EDIT_TODO } = store.actions;

export default state;
