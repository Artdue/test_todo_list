import { createSlice } from '@reduxjs/toolkit';
import getTasks from './thunks/getTasks';
import addTasks from './thunks/addTask';
import deleteTasks from './thunks/deleteTask';
import editTasks from './thunks/editTasks';
import { IInput, ITasksType } from '../types/types';
import checkTasks from './thunks/checkTask';

const initialState: ITasksType = {
  tasks: [] as IInput[],
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.tasks = action.payload;
        }
      })
      .addCase(getTasks.rejected, (state) => {
        state.loading = false;
        console.error('Error!');
      })
      .addCase(addTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.tasks = [...state.tasks, action.payload];
        }
      })
      .addCase(addTasks.rejected, (state) => {
        state.loading = false;
        console.error('Error!');
      })
      .addCase(deleteTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const deletedId = action.payload;
          state.tasks = state.tasks.filter((task) => task.id !== deletedId);
        }
      })
      .addCase(deleteTasks.rejected, (state) => {
        state.loading = false;
        console.error('Error!');
      })
      .addCase(checkTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkTasks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const updatedTask = action.payload;
          state.tasks = state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          );
        }
      })
      .addCase(checkTasks.rejected, (state) => {
        state.loading = false;
        console.error('Error!');
      })
      .addCase(editTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(editTasks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const updatedTask = action.payload;
          state.tasks = state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          );
        }
      })
      .addCase(editTasks.rejected, (state) => {
        state.loading = false;
        console.error('Error!');
      })
      .addDefaultCase(() => {});
  },
});

export default tasksSlice.reducer;
