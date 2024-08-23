import { Layout } from 'antd'
import React from 'react'
import HeaderLayout from '../layout/HeaderLayout'
import SiderLayout from '../layout/SiderLayout'
import HomeLayout from '../layout/HomeLayout'
import RightSider from '../layout/RightSider'

const { Header, Sider, Content } = Layout

const HomePage = () => {
    return (
        <Layout className="h-full mx-10 bg-backgroundColor">
            <Header className="bg-backgroundColor px-0 mb-5">
                <HeaderLayout />
            </Header>
            <Layout className="flex-1 flex gap-5 bg-backgroundColor">
                <Sider width="300px" style={{ background: '#05151d' }}>
                    <SiderLayout />
                </Sider>
                <Layout className="h-full w-full overflow-y-auto no-scrollbar flex gap-5 bg-backgroundColor pb-4">
                    <Content className="bg-backgroundColor h-full">
                        <HomeLayout />
                    </Content>
                    <Sider width="300px" style={{ background: '#05151d' }}>
                        <RightSider />
                    </Sider>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default HomePage
