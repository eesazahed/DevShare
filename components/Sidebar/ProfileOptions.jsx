const ProfileOptions = ({ show }) => {
	if (show) {
		return (
			<>
				<div className='absolute flex flex-col items-center justify-end gap-2 p-4 text-center border rounded-lg shadow-lg border-slate-700 w-fit bg-slate-800'>
					<a className='w-full p-2 rounded-md cursor-pointer hover:bg-slate-900'>
						<button className='flex gap-4 p-2'>
							<img
								src='/svg/icons/user.svg'
								alt='Settings Icon'
							/>
							<p>Profile</p>
						</button>
					</a>
					<a className='w-full p-2 rounded-md cursor-pointer hover:bg-slate-900'>
						<button className='flex gap-4 p-2'>
							<img
								src='/svg/icons/settings.svg'
								alt='Settings Icon'
							/>
							<p>Settings</p>
						</button>
					</a>
					<a className='w-full p-2 border border-transparent rounded-md cursor-pointer hover:border-red-300 hover:bg-red-900 '>
						<button className='flex gap-4 p-2'>
                            <img
								src='/svg/icons/lock.svg'
								alt='Settings Icon'
							/>
							<p>Log Out</p>
						</button>
					</a>
				</div>
			</>
		);
	}
};

export default ProfileOptions;
