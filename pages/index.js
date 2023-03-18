import CHead from '@/components/CHead';
import Hero from '@/components/Hero';
// import Nav from "@/components/Nav";

import { getCookie, setCookie, getCookies, deleteCookie } from 'cookies-next';

const Home = () => {
	return (
		<>
			<CHead title={'Home'} />

			{/* <Nav loggedIn={getCookie('loggedIn')} /> */}
			<div className='p-4 m-2'>
				<Hero
					variant={'noImg'}
					title={'Welcome to DevShare'}
					description={
						"Welcome to DevShare! This is a Free and Open-Source platform for developers to share their coding knowledge, collaborate with others and work together on projects. There are no dumb questions and all developers are invited."
					} // TODO: Ask SonicX180 about this
					primaryBtn={'Get Started'}
					secondaryBtn={'Learn More'}
					secondaryBtnLink={'/about'}
					primaryBtnLink={'/register?ref=app'}
				/>
			</div>
		</>
	);
};

export default Home;
