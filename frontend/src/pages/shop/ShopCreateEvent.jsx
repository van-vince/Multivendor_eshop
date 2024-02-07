import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import CreateEvent from "../../components/Shop/CreateEvent.jsx";

const ShopCreateEvent = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
        <DashboardSideBar active={6} />
      </div>
      <div className="w-full justify-center flex pt-5">
          <CreateEvent />
      </div>
    </div>
  </div>
  )
}

export default ShopCreateEvent