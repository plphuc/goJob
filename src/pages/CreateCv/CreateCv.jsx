import React from 'react'
import MainLayout from 'src/layout/MainLayout'
import PDFToRender from './components/PDFToRender'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFElements from './components/PDFElements'
import InfoForm from './components/InfoForm/InfoForm'
import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout'
import HeaderLayout from 'src/layout/HeaderLayout'

/* <PDFDownloadLink document={<PDFToRender/>} fileName="somename.pdf">
    <button>
        loading ? 'Loading document...' : 'Download now!'
    </button>
</PDFDownloadLink> */ 

const CreateCv = () => {
    return (
        <Layout className="bg-backgroundColor">
            <Header className="bg-backgroundColor px-3">
                <HeaderLayout />
            </Header>
            <InfoForm />
        </Layout>
    )
}

export default CreateCv
