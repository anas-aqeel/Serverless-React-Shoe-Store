import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import './buttons.css'

export const CustomIconButton = ({ children, style, onClick, className }) => {
    return (
        <IconButton
            className={className}
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
export const MuiRouteLink = ({ route, color, children,style }) => {
    return (
        <Link

            to={route}
            style={{
                textDecoration: 'none',
                color: `${color} !important`,
                ...style
            }}>
            {children}
        </Link>
    )
}

