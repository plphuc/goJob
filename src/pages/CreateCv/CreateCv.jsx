import React from 'react'
import MainLayout from 'src/layout/MainLayout'
import PDFToRender from './components/PDFToRender'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFElements from './components/PDFElements'
import InfoForm from './components/InfoForm/InfoForm'

/* <PDFDownloadLink document={<PDFToRender/>} fileName="somename.pdf">
    <button>
        loading ? 'Loading document...' : 'Download now!'
    </button>
</PDFDownloadLink> */

const CreateCv = () => {
    return (
        <MainLayout>
            <InfoForm />
        </MainLayout>
    )
}

export default CreateCv
