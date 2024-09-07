import React from 'react'

const A4Styler = () => {
    return (
        <style>{`
        @page {
            size: 5in 6in;
            margin: 1in 1in 1.25in 1in;
        }
  `}</style>
    )
}

export default A4Styler
