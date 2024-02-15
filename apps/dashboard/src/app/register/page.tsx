"use client";
import React, { useEffect, useState } from "react";

import { useUser } from "@auth0/nextjs-auth0/client";

import { User } from "database";

const RegisterPage = () => {
  const { user, isLoading } = useUser();

  const [userRecord, setUserRecord] = useState<User>();

  // console.log("user sid", user?.sid);

  // useEffect(() => {
  //   if (isLoading) return;

  //   console.log("fetching user", user?.email);

  //   fetch(`/api/user/${user?.email}`).then((res) => {
  //     res.json().then((data) => {
  //       console.log("user data", data);
  //     });
  //   });
  // }, [isLoading, user?.email]);

  return <div>RegisterPage</div>;
};

export default RegisterPage;
