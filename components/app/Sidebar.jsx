import ProfileBanner from "../Sidebar/ProfileBanner";

const Sidebar = ({ user }) => {
    return (
        <>
            <div className="min-w-[312px] w-fit max-w-[336px] p-4 h-screen bg-slate-800 text-white">
                <div className="flex items-center justify-between">
                    <ProfileBanner user={user} />                    
                </div>
                
            </div>
        </>
    );
}

export default Sidebar;