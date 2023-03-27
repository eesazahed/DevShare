import { useState } from "react";
import ProfileOptions from "./ProfileOptions";
import SidebarLink from "./SidebarLink";
import { NextPage } from "next";

interface Props {
  user: any; // TODO, add a static type for user
}

const ProfileBanner: NextPage<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-2">
        <div className="flex items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row items-center">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <img
                  src={user?.profileUrl}
                  alt={user?.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-md">{user?.name}</p>
              </div>
              <div className="flex align-middle">
                {open ? (
                  <button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <img
                      src={"/svg/icons/chevron/up.svg"}
                      alt="toggle"
                      className="w-4 h-4 ml-4 cursor-pointer"
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <img
                      src={"/svg/icons/chevron/down.svg"}
                      alt="toggle"
                      className="w-4 h-4 ml-4 cursor-pointer"
                    />
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <ProfileOptions show={open} />
            </div>
            <div className="w-full">
              <SidebarLink
                link={"/new"}
                icon={"/svg/icons/plus.svg"}
                text={"New"}
                accent
              />
              <SidebarLink
                link={"/articles"}
                icon={"/svg/icons/home.svg"}
                text={"Home"}
              />
              <SidebarLink
                link={"/articles"}
                icon={"/svg/icons/book-open.svg"}
                text={"Articles"}
              />
              <SidebarLink
                link={"/teams"}
                icon={"/svg/icons/users.svg"}
                text={"Teams"}
              />
            </div>
            <div className="w-full">
              <SidebarLink
                link={"/help"}
                icon={"/svg/icons/help-circle.svg"}
                text={"Help"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;
