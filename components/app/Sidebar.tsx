import { NextPage } from "next";
import ProfileBanner from "./Sidebar/ProfileBanner";

interface Props {
  user: any; // TODO, add a static type for user
}

const Sidebar: NextPage<Props> = ({ user }) => {
  return (
    <>
      <div className="min-w-[312px] w-fit max-w-[336px] p-4 h-screen bg-slate-800 text-white">
        <div className="flex items-center justify-between">
          <ProfileBanner user={user} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
