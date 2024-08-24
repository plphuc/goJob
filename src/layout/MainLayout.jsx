import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import HeaderLayout from './HeaderLayout'

const MainLayout = ({ children }) => {
    return (
        <Layout className="h-full bg-backgroundColor">
            <Header className="bg-backgroundColor px-0">
                <HeaderLayout />
            </Header>
            {children}
        </Layout>
    )
}

export default MainLayout
