import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../context/AuthContext';

import LoadingSpinner from '../LoadingSpinner';
import CustomButton from '../CustomButton';
import CircleCheckbox from '../CircleCheckbox';

export default function List() {

  const { token, user } = useContext(AuthContext);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/shopping/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      setList(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }, []);

  const completeItem = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setList(updatedList);
  };

  const addNewListItem = (newItem) => {
    const maxId = Math.max(...list.map((item) => item.id));
    const item = {
      id: maxId + 1,
      icon: 'fa-solid fa-house',
      item: newItem,
      completed: false,
    }
    setList([...list, item]);
    setNewItem('');
  };

  return (
    <div className='flex flex-col gap-2 w-full ml-6 mt-4'>
      {loading ? <LoadingSpinner /> :
        <div className=''>
          <ul>
            {list.map((item) => (
              <li key={item.id} className={`text-white my-2 ${item.completed ? 'line-through' : ''}`}>
                <CircleCheckbox isChecked={item.completed} onChange={() => completeItem(item.id)} checkboxText={item.item}/>
              </li>
            ))}
          </ul>
        </div>
      }
      <div>
        <input
          className='p-2 mr-2'
          type='text'
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <CustomButton
          content={'Add new item'}
          click={() => addNewListItem(newItem)}
        />
      </div>
    </div>
  );
}