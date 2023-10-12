import { useState } from 'react';

import Grid from '../layout/Grid';
import MenuCard from '../layout/MenuCard'
import Modal from '../layout/Modal';

import AddMenuItem from '../forms/AddMenuItem';

export default function Menu() {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [menuItems, setMenuItems] = useState([
		{
			title: 'Steak',
			ingredients: ['2 Ribeye steaks', '200g Butter', 'Fresh Thyme', 'Rock Salt'],
			servings: 'Serves 2',
			prepTime: '20 mins',
		},
		{
			title: 'Curry',
			ingredients: ['1 Large onion', 'Curry Spices', '1 Tin of chopped tomatoes', '200g Rice', '2 Naan breads'],
			servings: 'Serves 2',
			prepTime: '40 mins',
		},
		{
			title: 'Salad',
			ingredients: ['200g Spinach', '200 Black beans', '200g Cherry tomatoes', '150g Feta', 'Salad dressing'],
			servings: 'Serves 2',
			prepTime: '5 mins',
		},
		{
			title: 'Bolognese',
			ingredients: ['250g Beef mince', '250g Pork mince', '1 Tin of choppedtomatoes', '1 Medium carrot', '1 Large onion', '200g Spaghetti'],
			servings: 'Serves 2',
			prepTime: '45 mins',
		},
	]);

	const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

	const handleAddMenuItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
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
							<MenuCard key={index} item={item} />
						))}
					</Grid>
				</div>
				<div className="flex justify-end">
					<button className="px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white" onClick={handleOpenModal}>
						Add menu Item
					</button>
				</div>

				<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
					<AddMenuItem onAddMenuItem={handleAddMenuItem} onClose={handleCloseModal}/>
				</Modal>
			</div>
		</>
	);
}
