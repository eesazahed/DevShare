import CHead from '@/components/CHead';
import Hero from '@/components/Hero';
// import Nav from "@/components/Nav";

import { getCookie, setCookie, getCookies, deleteCookie } from 'cookies-next';

const Home = () => {
	if (getCookie("loggedIn")) {
	  window.location.href = "/app"; //TODO: ask SonicX180 if app route should be /app or /~
  } 

	return (
		<>
			<CHead title={'Home'} />

			{/* <Nav loggedIn={getCookie('loggedIn')} /> */}
			<div className='p-4 m-2'>
				<Hero
					variant={'noImg'}
					title={'Welcome to DevShare'}
					description={
						"Welcome to DevShare! This is a Free and Open-Source platform for developers to share their coding knowledge, collaborate with others, work together, and more! No questions are too small and all developers are invited."
					} 
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
