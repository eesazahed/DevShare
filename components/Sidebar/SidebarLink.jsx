const SidebarLink = ({ text, icon, link, accent }) => {
	return accent ? (
		<>
			<a
				href={link}
				className='flex items-center justify-between w-full p-2 m-2 text-center text-white bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900'
			>
				<button className='flex items-center w-full gap-4 p-2 text-center'>
					<img src={icon} alt={text} />
					<p className='flex align-middle'>{text}</p>
				</button>
			</a>
		</>
	) : (
		<>
			<a
				href={link}
				className='flex items-center justify-between w-full p-2 m-2 text-center text-white rounded-lg cursor-pointer hover:bg-slate-900'
			>
				<button className='flex items-center gap-4 p-2'>
					<img src={icon} alt={text} />
					<p className='flex align-middle'>{text}</p>
				</button>
			</a>
		</>
	);
};

export default SidebarLink;
