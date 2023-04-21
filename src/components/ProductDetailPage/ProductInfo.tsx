import { ProductInfoType } from "@typess/common.type";
import { memo } from "react";

type ProductInfoProps = {
  productInfo: ProductInfoType;
};

export const ProductInfo = memo(({ productInfo }: ProductInfoProps) => {
  return <div>ProductInfo</div>;
});
