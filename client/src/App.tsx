import { useEffect, useState } from 'react';
import './App.css';
import { IInput, RootState } from '../../client/types/types';
import Task from './components/task/Task';
import ProgressBar from './components/progressBar/ProgressBar';
import NewTask from './components/newTask/NewTask';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import getTasks from '../redux/thunks/getTasks';

function App(): React.JSX.Element {
  const tasks = useAppSelector((state: RootState) => state.tasksSlice.tasks);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    void dispatch(getTasks());
  }, [dispatch]);

  function filterTasks(tasks: IInput[], filter: string): IInput[] {
    if (filter === 'All') {
      return tasks;
    } else if (filter === 'Done') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'Undone') {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ProgressBar tasks={tasks} />
      <div className='tasksMain'>
        <div className='tasksHeader'>
          <div className='mainTitle'>
            <h2>Tasks</h2>
          </div>
          {/* <div className='tasksFilter'> */}
          <div className='dropdown'>
            <button className='main-menu-button' onClick={toggleMenu}>
              <div className='main-menu-icon'>
                <div>{filter}</div>
                <img src='../public/chev-down.png'></img>
              </div>
            </button>
            {isOpen && (
              <div className='main-menu-content'>
                <button className='btn-All' onClick={() => setFilter('All')}>
                  All
                </button>
                <button className='btn-done' onClick={() => setFilter('Done')}>
                  Done
                </button>
                <button
                  className='btn-undone'
                  onClick={() => setFilter('Undone')}
                >
                  Undone
                </button>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
        <div className='tasksList'>
          {filterTasks(tasks, filter).map((el, i) => (
            <div className='oneTask' key={i}>
              <Task tasks={el as IInput} />
            </div>
          ))}
        </div>
        <div>
          <NewTask />
        </div>
      </div>
    </>
  );
}

export default App;
