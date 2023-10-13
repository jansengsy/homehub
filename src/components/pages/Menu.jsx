import { useState, useEffect } from 'react';

import MenuDirections from '../components/menu/MenuDirections';
import MenuList from '../components/menu/MenuList';

export default function Menu() {

	const [isItemOpen, setIsItemOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(false);

	const handleSelectedItem = (item) => {
		setIsItemOpen(true);
		setSelectedItem(item)
	}

	const handleDeselectedItem = () => {
		setIsItemOpen(false);
		setSelectedItem(null)
	}

	return (
		<>
			<div className='h-full flex flex-col'>
				{!isItemOpen && 
					<MenuList handleSelectedItem={handleSelectedItem}/>
				}
				{isItemOpen &&
					<MenuDirections item={selectedItem} close={handleDeselectedItem}/>
				}		
			</div>
		</>
	);
}
