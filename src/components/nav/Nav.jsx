import { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageWrapper from '../layout/PageWrapper';
import CustomButton from '../components/CustomButton';

import { AuthContext } from '../../context/AuthContext';

export default function Nav() {

	const { deleteToken } = useContext(AuthContext);

	const [isCollapsed, setCollapsed] = useState(false);

	const handleToggle = () => {
			setCollapsed(!isCollapsed);
	};

	useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

	return (
		<div className='flex'>
			<div id='sidebar' className={`flex flex-col h-screen border-r-2 bg-gray-950 border-gray-800 ${ isCollapsed ? 'w-16' : 'w-64'} fixed`}>
				<nav className='px-3 py-2'>
					<div className={`flex ${ isCollapsed ? '' : 'justify-end'}`}>
						<FontAwesomeIcon icon={`fa-solid ${isCollapsed ? 'fa-angles-right' : 'fa-angles-left'}`} className='text-white cursor-pointer px-3 py-2' onClick={handleToggle}/>
					</div>
					<ul className='font-medium text-white'>
						<Link to={'/'}>
							<li className='hover:bg-gray-800 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-home'/> { !isCollapsed && 'Home' }
							</li>
						</Link>
						<Link to={'/bills/1'}>
							<li className='hover:bg-gray-900 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-credit-card'/> { !isCollapsed && 'Bills' }
							</li>
						</Link>
						<Link to={'/menu/1'}>
							<li className='hover:bg-gray-900 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-utensils'/> { !isCollapsed && 'Menu' }
							</li>
						</Link>
						<Link to={'/shoppinglist'}>
							<li className='hover:bg-gray-900 px-3 py-3'>
								<FontAwesomeIcon icon='fa-solid fa-scroll'/> { !isCollapsed && 'Shopping List' }
							</li>
						</Link>
					</ul>
				</nav>
				<div className='flex justify-center mt-auto pb-4'>
					<CustomButton content={isCollapsed ? <FontAwesomeIcon icon='fa-solid fa-right-from-bracket'/> : 'Logout'} click={deleteToken} customClasses={'w-full'}/>
				</div>
			</div>
			<div id='detail' className='h-screen w-full'>
				<PageWrapper style={ isCollapsed ? 'ml-16' : 'ml-64' }>
					<Outlet /> {/* Similar to slots in vue but in the context of route elements */}
				</PageWrapper>
			</div>
		</div>
	);
}
