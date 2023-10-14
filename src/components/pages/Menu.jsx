import { useState, useEffect } from 'react';

import MenuDirections from '../components/menu/MenuDirections';
import MenuList from '../components/menu/MenuList';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Menu() {

	const [isItemOpen, setIsItemOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(false);
	const [menuItems, setMenuItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    fetch('http://localhost:8080/menu', {
			  method: 'GET',
			})
			.then(response => response.json())
			.then(data => {
				setMenuItems(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
  }, []);

	const handleSelectedItem = (item) => {
		setIsItemOpen(true);
		setSelectedItem(item)
	}

	const handleDeselectedItem = () => {
		setIsItemOpen(false);
		setSelectedItem(null)
	}

	return (
		<div className='h-full flex flex-col'>
			{!isItemOpen && 
				loading ? <LoadingSpinner /> : <MenuList menuItems={menuItems} setMenuItems={setMenuItems} handleSelectedItem={handleSelectedItem}/>
			}
			{isItemOpen &&
				<MenuDirections item={selectedItem} close={handleDeselectedItem}/>
			}		
		</div>
	);
}
