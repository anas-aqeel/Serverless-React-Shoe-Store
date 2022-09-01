import React from 'react'
import { CustomIconButton } from '../Buttons/MuiIconButtons'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const SocialLinks = ({gradient}) => {
    return (
        <div>
            <CustomIconButton
                style={{
                    background: gradient,
                    padding: '7px'    
                }}
                className="popular-products-arrows"
            >
                <FacebookIcon style={{ color: "#f1dfdf" }} />
            </CustomIconButton>
            <CustomIconButton
                style={{
                    background:  gradient,
                    padding: '7px'    

                }}
                className="popular-products-arrows"
            >
                <InstagramIcon style={{ color: "#f1dfdf" }} />
            </CustomIconButton>
            <CustomIconButton
                style={{
                    background: gradient,
                    padding: '7px'    

                }}
                className="popular-products-arrows"
            >
                <TwitterIcon style={{ color: "#f1dfdf" }} />
            </CustomIconButton>

        </div>
    )
}

export default SocialLinks