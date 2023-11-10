import store from '../redux/store.ts';

interface IInput {
  id: string;
  title: string | undefined;
  completed: boolean;
}

interface ITask {
  tasks: IInput;
}

export type IBody = {
  title: string | undefined;
  completed: boolean;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ITasksType = {
  tasks: IInput[];
  loading: boolean;
};

interface DropMenuProps {
  editHandler: () => void;
  deleteHandler: (id: string) => void;
  id: string;
}

export type { IInput, ITask, DropMenuProps };
