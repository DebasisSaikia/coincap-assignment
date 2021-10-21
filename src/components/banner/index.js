import React from "react";
import styled from "styled-components";
import style from "./bannerStyles";
import { data } from "./data";

const BannerWrapper = styled.div`
  ${style}
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="banner_data">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <h2>{item.value}</h2>
            </div>
          );
        })}
      </div>
    </BannerWrapper>
  );
};

export default Banner;
