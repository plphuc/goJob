import { Layout } from 'antd'
import React from 'react'
import HeaderLayout from '../layout/HeaderLayout'

const { Header, Sider, Content } = Layout

const HomePage = () => {
    return (
        <Layout className="h-full mx-10">
            <Header className="bg-backgroundColor px-0">
                <HeaderLayout />
            </Header>
            <Layout className="">
                <Sider style={{ background: '#05151d' }}></Sider>
                <Content className="bg-backgroundColor"></Content>
            </Layout>
        </Layout>
    )
}

export default HomePage
