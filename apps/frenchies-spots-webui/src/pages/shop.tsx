import React from "react";
import { PageLayout } from "../components";

const Shop = () => {
  return <div>Shop</div>;
};

export default Shop;

Shop.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
