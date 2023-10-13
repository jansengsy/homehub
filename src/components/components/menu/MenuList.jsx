import { useState, useEffect } from 'react';

import AddMenuItem from '../../forms/AddMenuItem';
import Button from '../Button';
import Card from '../../layout/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '../../layout/Grid';
import MenuCard from './MenuCard';
import Modal from '../../layout/Modal';

export default function MenuList({handleSelectedItem}) {

  const [menuItems, setMenuItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/menu', {
			  method: 'GET',
			})
			.then(response => response.json())
			.then(data => {
				setMenuItems(data);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

	const removeMenuItem = (itemId) => {
		const updatedMenuItems = menuItems.filter((item) => item.id !== itemId);
		setMenuItems(updatedMenuItems);
	};
	
	const addMenuItem = (newItem) => {
		const maxId = Math.max(...menuItems.map((item) => item.id));
		const newId = maxId + 1;
  	newItem.id = newId;
    console.log(newItem)
		setMenuItems([...menuItems, newItem]);
	};

  return (
    <div className='flex-grow gap-2'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-4xl text-white'>Menu</h1>
          <h3 className='text-xl text-white'>
            Here are the items on your menu for this week:
          </h3>
        </div>
        <div className='flex items-end'>
          <Button
            click={handleOpenModal}
            content={<FontAwesomeIcon icon='fa-solid fa-plus'/>}
            customClasses={'inline-flex items-center h-10'}
            />
        </div>
      </div>
      <Grid>
        {menuItems.map((item) => (
          <Card key={item.id} click={() => handleSelectedItem(item)}>
            <MenuCard item={item} removeMenuItem={removeMenuItem}/>
          </Card>
        ))}
      </Grid>

      {isModalOpen && <Modal onClose={handleCloseModal}>
        <AddMenuItem onAddMenuItem={addMenuItem} onClose={handleCloseModal}/>
      </Modal>}
    </div>
  );
}
