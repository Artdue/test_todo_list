import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks } from '../tasks.api';

const getTasks = createAsyncThunk('tasks/getTasks', async () => {
  try {
    const response = await fetchTasks();
    return response;
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
});
export default getTasks;
