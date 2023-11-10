import { IInput, IBody } from '../types/types';

export const fetchTasks = async (): Promise<IInput[] | undefined> => {
  try {
    const response: Response = await fetch(`http://localhost:3001/todos/`);
    if (response.ok) {
      const data = (await response.json()) as IInput[];
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const addNewTask = async (body: IBody): Promise<IInput | undefined> => {
  try {
    const response: Response = await fetch(`http://localhost:3001/todos/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const data = (await response.json()) as IInput;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id: string): Promise<IInput | undefined> => {
  try {
    const response: Response = await fetch(
      `http://localhost:3001/todos/${id}`,
      {
        method: 'Delete',
      }
    );
    if (response.ok) {
      const data = (await response.json()) as IInput;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const checkTask = async (
  taskStatus: IInput
): Promise<IInput | undefined> => {
  try {
    const response: Response = await fetch(
      `http://localhost:3001/todos/${taskStatus.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(taskStatus),
      }
    );
    if (response.ok) {
      const data = (await response.json()) as IInput;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const editTask = async (body: IInput): Promise<IInput | undefined> => {
  try {
    const response: Response = await fetch(
      `http://localhost:3001/todos/${body.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
      }
    );
    if (response.ok) {
      const data = (await response.json()) as IInput;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
