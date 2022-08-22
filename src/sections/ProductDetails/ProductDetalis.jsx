import React from "react";
import "./product-details.css";
import { FeaturedProductCard } from "../../components/Card/ProductCard";
import { CustomIconButton } from "../../components/Buttons/MuiIconButtons";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const ProductDetails = () => {
  return (
    <div
      className="featured-product-container"
    >
      <div className="featured-product-2">
        <div className="featured-product-heading">Product Details</div>
        <div className="featured-product-sub-heading">
          Get to Know Our Featured <span>Product</span>.
        </div>
        <div className="featured-product-text">
          tenetur eum quos placeat itaque voluptatum minima! Lorem ipsum dolor
          debitis sit quaerat eius minima neque odio veritatis?
        </div>
        <FeaturedAchievementCard
          data={{
            icon: <WorkspacePremiumOutlinedIcon />,
            heading: "Best Quality Shoes",
            subText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          }}
        />
        <FeaturedAchievementCard
          data={{
            icon: <MonetizationOnOutlinedIcon />,
            heading: "Best Giving Prices",
            subText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          }}
        />
      </div>
      
      <div className="featured-product-grid">
        <div className="featured-product-1">
          <FeaturedProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

const FeaturedAchievementCard = ({data}) => {
  return (
    <div className="featured-product-achievement">
      <CustomIconButton className="featured-icon-btn">
        {data.icon}
      </CustomIconButton>
      <div className="featured-acheievement-text-div">
        <p className="featured-acheievement-heading">{data.heading}</p>
        <p className="featured-acheievement-subText">
          {data.subText}
        </p>
      </div>
    </div>
  );
};
