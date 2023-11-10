import { useState } from 'react';
import { DropMenuProps } from '../../../types/types';
import './DropMenu.css';

export default function DropMenu({
  editHandler,
  deleteHandler,
  id,
}: DropMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const taskID = id;

  return (
    <div className='dropdown'>
      <button className='menu-button' onClick={toggleMenu}>
        <div className='menu-icon'>•••</div>
      </button>
      {isOpen && (
        <div className='menu-content'>
          <button className='btn-edit' onClick={editHandler}>
            Edit
          </button>
          <button className='btn-delete' onClick={() => deleteHandler(taskID)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
