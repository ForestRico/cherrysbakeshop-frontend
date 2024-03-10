import React, { useEffect, useState } from "react";
import classes from './adminPage.module.css';
import Title from "../../components/Title/Title";
import NotFound from "../../components/NotFound/NotFound";
import { Outlet } from "react-router-dom";

const links = ['Forms']

const AdminPage = () => {
  return (
    <>
            <Title title="Admin Panel" margin="24px 12px" />
            <Title title="Forms" margin="24px 12px" />
            <Outlet />
        </>
  )
}

export default AdminPage