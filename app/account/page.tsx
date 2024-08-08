import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import DashBoard from '@/components/dashboard/DashBoard'
import OrderList from '../orders/page'

const Orders:React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
        
           <Header/>
           <OrderList/>
           <Footer/>
           
        </div>
  )
}

export default Orders