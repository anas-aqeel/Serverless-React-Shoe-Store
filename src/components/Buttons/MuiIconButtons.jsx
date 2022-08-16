import { IconButton } from '@mui/material'
import React from 'react'

export const CustomIconButton = ({children, style, onClick}) => {
    return (
        <IconButton
            sx={{
                p: 1,
                borderRadius: '5px',
                backgroundColor: '#1416187d',
                margin: '0px 5px'
            }}
            style={style}
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onClick}
            color="inherit"
        >
            {children}
        </IconButton>
    )
}

