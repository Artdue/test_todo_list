import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewTask } from '../tasks.api';
import { IBody } from '../../types/types';

const addTasks = createAsyncThunk('addTasks', async (body: IBody) => {
  try {
    const response = await addNewTask(body);
    return response;
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
});
export default addTasks;
