import { IInput, ITask } from '../../../types/types';
import './Task.css';
import DropMenu from '../dropMenu/DropMenu';
import { useAppDispatch } from '../../../redux/hooks';
import deleteTask from '../../../redux/thunks/deleteTask';
import checkTask from '../../../redux/thunks/checkTask';
import { useState } from 'react';
import editTasks from '../../../redux/thunks/editTasks';
import '../../../public/checkbox.svg';

export default function Task({ tasks }: ITask) {
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState<string | undefined>(tasks.title);
  const [check, setCheck] = useState(tasks.completed);

  const deleteHandler = async () => {
    dispatch(deleteTask(tasks.id));
  };

  const editHandler = () => {
    setEdit(true);
  };

  const submitEditHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const body: IInput = {
      id: tasks.id,
      title: input,
      completed: tasks.completed,
    };
    dispatch(editTasks(body));
    setEdit(false);
  };

  const checkHandler = async () => {
    const taskStatus = {
      id: tasks.id,
      title: tasks.title,
      completed: !tasks.completed,
    };
    dispatch(checkTask(taskStatus));
    setCheck(!tasks.completed);
  };

  return (
    <>
      {edit ? (
        <div className='editTask'>
          <form onSubmit={submitEditHandler}>
            <input
              className='editInput'
              placeholder='Add your task'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className='editBtn'>save</button>
          </form>
        </div>
      ) : (
        <div className='oneTask'>
          <div className='taskTtile'>
            {check ? (
              <div className='Checked' onClick={checkHandler}>
                <img src='../../../Vector.svg' />
              </div>
            ) : (
              <img src='../../../public/checkbox.svg' onClick={checkHandler} />
            )}
            <div className='main-title'>{tasks.title}</div>
          </div>
          <div className='taskMenu'>
            <DropMenu
              editHandler={editHandler}
              deleteHandler={deleteHandler}
              id={tasks.id as string}
            />
          </div>
        </div>
      )}
    </>
  );
}
