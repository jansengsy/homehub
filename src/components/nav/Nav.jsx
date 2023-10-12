import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageWrapper from '../layout/PageWrapper';

export default function Nav() {
	return (
		<>
			<div className='flex'>
				<div id='sidebar' className='flex flex-col h-screen w-64 border-r-2 bg-gray-950 border-gray-800'>
					<nav className='px-3 py-2'>
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
							<Link to={'/menu'}>
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
				</div>
				<div id='detail' className='h-screen w-full'>
					<PageWrapper>
						<Outlet /> {/* Similar to slots in vue but in the context of route elements */}
					</PageWrapper>
				</div>
			</div>
		</>
	);
}
