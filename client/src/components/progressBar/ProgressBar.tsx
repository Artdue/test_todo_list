import React from 'react';
import { IInput } from '../../../types/types';
import './ProgressBar.css';

interface ProgressBarProps {
  tasks: IInput[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ tasks }) => {
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const percentage = (completedCount / totalTasks) * 100;

  return (
    <div className='progress-bar'>
      <h3>Progress</h3>
      <div className='bar'>
        <div className='completed' style={{ width: `${percentage}%` }}></div>
        <div className='remaining'></div>
      </div>
      <div className='count'>{completedCount} completed</div>
    </div>
  );
};

export default ProgressBar;
