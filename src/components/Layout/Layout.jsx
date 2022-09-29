import React from 'react'

export const Layout = ({children}) => {
    return (
        <div
        style={{
            backgroundColor: '#2A2834',
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
            width: '100vw',
            height: '100vh'            
        }}>
            {children}
            </div>
    )
}
