import ReactDOMServer from 'react-dom/server'
import { Html } from 'react-pdf-html'
import { Document, Page, Text, View } from '@react-pdf/renderer'
import PDFElements from './PDFElements'

export const customStylesheet = {
    p: {
        color: 'red',
    },
}

const htmlToRender = ReactDOMServer.renderToStaticMarkup(<PDFElements/>)

const PDFToRender = () => (
    <Document>
        <Page size="A4">
            <Html stylesheet={customStylesheet} className="unset">
                {htmlToRender}
            </Html>
        </Page>
    </Document>
)

export default PDFToRender
