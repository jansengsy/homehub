import { useState, useEffect } from 'react';

import Grid from '../layout/Grid';
import MenuCard from '../layout/MenuCard'
import Modal from '../layout/Modal';

import AddMenuItem from '../forms/AddMenuItem';

export default function Menu() {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [menuItems, setMenuItems] = useState([]);

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

	const removeMenuItem = (itemId) => {
		const updatedMenuItems = menuItems.filter((item) => item.id !== itemId);
		setMenuItems(updatedMenuItems);
	};
	
	const addMenuItem = (newItem) => {
		const maxId = Math.max(...menuItems.map((item) => item.id));
		const newId = maxId + 1;
  	newItem.id = newId;
		setMenuItems([...menuItems, newItem]);
	};

	const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

	return (
		<>
			<div className="h-full flex flex-col">
				<div className="flex-grow gap-2">
					<h1 className="text-4xl text-white">Menu</h1>
					<h3 className="text-2xl text-white">
						Here are the items on your menu for this week:
					</h3>
					<Grid className="m-2">
						{menuItems.map((item, index) => (
							<MenuCard key={index} item={item} removeMenuItem={removeMenuItem} />
						))}
					</Grid>
				</div>
				<div className="flex justify-end">
					<button className="px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white" onClick={handleOpenModal}>
						Add menu Item
					</button>
				</div>

				<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
					<AddMenuItem onAddMenuItem={addMenuItem} onClose={handleCloseModal}/>
				</Modal>
			</div>
		</>
	);
}
