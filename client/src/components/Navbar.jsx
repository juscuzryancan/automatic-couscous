import { Link } from 'react-router-dom';

const Navbar = () => {

	return (
		<nav className="flex items-center h-14 px-4 border-b border-gray-200 bg-gray-100 dark:bg-gray-950 border-gray-200 dark:border-gray-800">
			<Link 
				className="flex items-center gap-2 font-semibold" 
				to="/"
			>
				Acme Inc
			</Link>
			<nav className="ml-auto flex items-center gap-4">
				<Link
					className="font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
					to='/'
				>
					Login
				</Link>
				<Link
					className="font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
					href="#"
				>
					Register
				</Link>
				<Link
					className="font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
					href="#"
				>
					Start Typing
				</Link>
				<Link
					className="font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
					href="#"
				>
					Resources
				</Link>
			</nav>
		</nav>
	);
}

export default Navbar;