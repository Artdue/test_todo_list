import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkTask } from '../tasks.api';
import { IInput } from '../../types/types';

const checkTasks = createAsyncThunk('checkTask', async (taskStatus: IInput) => {
  try {
    const response = await checkTask(taskStatus);
    return response;
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
});
export default checkTasks;
