import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTask } from '../tasks.api';

const deleteTasks = createAsyncThunk('deleteTasks', async (id: string) => {
  try {
    await deleteTask(id);
    return id;
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
});
export default deleteTasks;
