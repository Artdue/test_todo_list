import { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import addTasks from '../../../redux/thunks/addTask';
import { IBody } from '../../../types/types';
import './NewTask.css';

export default function NewTask() {
  const dispatch = useAppDispatch();

  const initState = '';

  const [input, setInput] = useState<string | undefined>('');

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const body: IBody = {
      title: input,
      completed: false,
    };
    setInput(initState);
    dispatch(addTasks(body));
  };

  return (
    <div className='newTask'>
      <form onSubmit={submitHandler}>
        <input
          className='inputTask'
          placeholder='Add your todo...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className='saveBtn'>save</button>
      </form>
    </div>
  );
}
