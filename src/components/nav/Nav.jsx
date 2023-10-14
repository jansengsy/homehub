import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageWrapper from '../layout/PageWrapper';
import CustomButton from '../components/CustomButton';

import { AuthContext } from '../../context/AuthContext';

export default function Nav() {

	const { user, deleteToken } = useContext(AuthContext);

	return (
		<div className='flex'>
			<div id='sidebar' className='flex flex-col h-screen w-64 border-r-2 bg-gray-950 border-gray-800'>
				<nav className='px-3 py-2'>
					<h1 className='text-xl text-white text-center pb-2'>Welcome back, {user.username}!</h1>
					<ul className='font-medium text-white'>
						<Link to={'/'}>
							<li className='rounded-lg hover:bg-gray-800 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-home' className='pr-2'/>HomeHub
							</li>
						</Link>
						<Link to={'/bills'}>
							<li className='rounded-lg hover:bg-gray-900 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-credit-card' className='pr-2'/>Bills
							</li>
						</Link>
						<Link to={'/menu/1'}>
							<li className='rounded-lg hover:bg-gray-900 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-utensils' className='pr-2'/>Menu
							</li>
						</Link>
						<Link to={'/shoppinglist'}>
							<li className='rounded-lg hover:bg-gray-900 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-scroll' className='pr-2'/>Shopping List
							</li>
						</Link>
					</ul>
				</nav>
				<div className='flex justify-center mt-auto pb-4'>
					<CustomButton content={'Logout'} click={deleteToken} customClasses={'w-full'}/>
				</div>
			</div>
			<div id='detail' className='h-screen w-full'>
				<PageWrapper>
					<Outlet /> {/* Similar to slots in vue but in the context of route elements */}
				</PageWrapper>
			</div>
		</div>
	);
}
