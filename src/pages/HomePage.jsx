import { Layout } from 'antd'
import React from 'react'
import HeaderLayout from '../layout/HeaderLayout'
import SiderLayout from '../layout/SiderLayout'
import HomeLayout from '../layout/HomeLayout'

const { Header, Sider, Content } = Layout

const HomePage = () => {
    return (
        <Layout className="h-full mx-10 bg-backgroundColor">
            <Header className="bg-backgroundColor px-0 mb-5">
                <HeaderLayout />
            </Header>
            <Layout className="flex-1 flex gap-5 bg-backgroundColor">
                <Sider width='300px' style={{ background: '#05151d'}}>
                    <SiderLayout />
                </Sider>
                <Content className="bg-backgroundColor">
                    <HomeLayout />
                </Content>
                <Sider width='300px' style={{ background: '#05151d'}}>
                    <SiderLayout />
                </Sider>
            </Layout>
        </Layout>
    )
}

export default HomePage
