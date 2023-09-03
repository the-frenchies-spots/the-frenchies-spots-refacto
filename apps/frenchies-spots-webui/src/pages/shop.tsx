import React, { ReactElement } from "react";
import { PageLayout } from "../components";

const Shop = () => {
  return <div>Shop</div>;
};

export default Shop;

Shop.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
