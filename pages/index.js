import CHead from "@/components/CHead";
// import Hero from "@/components/Hero";
// import Nav from "@/components/Nav";

import { getCookie, setCookie, getCookies, deleteCookie } from "cookies-next";

const Home = () => {
	if (getCookie("loggedIn")) {
	  window.location.href = "/app"; //TODO: ask SonicX180 if app route should be /app or /~
  } 

	return (
		<>
			<CHead title={"Home"} />
			{/* <Nav /> */}
			<div className='p-4 m-2'>
				{/* <Hero /> */}
			</div>
		</>
	);
};

export default Home;