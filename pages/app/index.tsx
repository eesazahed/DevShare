import CHead from "@/components/CHead";
import { getUsers } from "../api/users";

import { getCookie, setCookie, deleteCookie, getCookies } from "cookies-next";
import Sidebar from "@/components/app/Sidebar";
import { NextPage } from "next";

interface Props {
  users: any; // TODO, add a static type for user
}

const AppHome: NextPage<Props> = ({ users }) => {
  if (!(typeof window === "undefined")) {
    if (!getCookie("loggedIn")) {
      window.location.href = "/register?ref=app";
    }
  }

  const allUsers = users.users;
  let curr;
  if (getCookie("loggedIn")) {
    for (let i = 0; i < allUsers.length; i++) {
      const user = allUsers[i];
      if (user.id === getCookie("userId")) {
        curr = user;
        break;
      }
    }
  } else {
    curr = undefined;
  }

  return (
    <>
      <CHead title={"Dashboard"} />
      <Sidebar user={curr} />
    </>
  );
};

export default AppHome;

export async function getServerSideProps(context: any) {
  return {
    props: {
      users: await getUsers(),
    },
  };
}
