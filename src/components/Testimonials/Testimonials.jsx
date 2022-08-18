import React from 'react'
import { CustomIconButton } from '../Buttons/MuiIconButtons'
import { FeaturedProductCard } from '../Card/ProductCard'
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
        <div className="testimonials-head">
        <div className="testimonials-heading">
          What our <br /> <span>Customer Says</span>
        </div>
        <div>
          <CustomIconButton
            style={{ outline: "1px solid #9b9999", background: "transaprent" }}
            className="testimonials-arrows"
          >
            <WestIcon style={{ color: "#9b9999" }} />
          </CustomIconButton>
          <CustomIconButton
            style={{
              background:
                "linear-gradient(99.25deg, #6193E3 9.55%, #F96758 96.08%)",
            }}
            className="testimonials-arrows"
          >
            <EastIcon style={{ color: "#f1dfdf" }} />
          </CustomIconButton>
        </div>
        </div>
        <div className='testimonials-body'>
            <div></div>
            <div></div>
        </div>   
    </div>
  )
}

export default Testimonials