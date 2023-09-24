import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home'

import AdminMakeChallenge from '../pages/AdminMakeChallenge'
import AdminManageChallenge from '../pages/AdminManageChallenge'

import OriginPlanChallenge from '../pages/OriginPlanChallenge'
import OriginDoneChallenge from '../pages/OriginDoneChallenge'

import UserList from '../pages/UserList'
import ReportManage from '../pages/ReportManage'

import MakeBanner from '../pages/MakeBanner'
import ManageBanner from '../pages/ManageBanner'

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AdminMakeChallenge" element={<AdminMakeChallenge />} />
        <Route path="/AdminManageChallenge" element={<AdminManageChallenge />} />

        <Route path="/OriginPlanChallenge" element={<OriginPlanChallenge />} />
        <Route path="/OriginDoneChallenge" element={<OriginDoneChallenge />} />

        <Route path="/UserList" element={<UserList />} />
        <Route path="/ReportManage" element={<ReportManage />} />
        
        <Route path="/MakeBanner" element={<MakeBanner />} />
        <Route path="/ManageBanner" element={<ManageBanner />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;