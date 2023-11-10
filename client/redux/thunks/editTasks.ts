import { createAsyncThunk } from '@reduxjs/toolkit';
import { editTask } from '../tasks.api';
import { IBody } from '../../types/types';

const editTasks = createAsyncThunk('editTasks', async (body: IBody) => {
  try {
    const response = await editTask(body);
    return response;
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
});
export default editTasks;
