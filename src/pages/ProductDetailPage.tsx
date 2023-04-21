import { useGetProductDetailQuery } from "@api/product.api";
import { ProductInfo } from "@components/ProductDetailPage/ProductInfo";
import { CustomBreadcrumbs } from "@components/Shared/CustomBreadcrumbs";
import { LoadingWrapper } from "@components/Shared/LoadingWrapper";
import { PATH } from "@constants/route.constant";
import { Box, Typography } from "@mui/material";
import { BreadcrumbsType, NavigateProductParamType } from "@typess/common.type";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const ProductDetailPage = () => {
  const location = useLocation();

  const state: NavigateProductParamType = location.state;

  const { data: productData, isLoading } = useGetProductDetailQuery(
    state.productId
  );

  const breadcrumbs: BreadcrumbsType[] = useMemo(
    () => [
      { name: "Home", path: PATH.HOME },
      { name: productData?.product.name || "Product Detail" },
    ],
    [productData?.product.name]
  );

  return (
    <LoadingWrapper isLoading={isLoading}>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />

      {/* Product Info */}
      {productData?.product && (
        <ProductInfo productInfo={productData?.product} />
      )}
    </LoadingWrapper>
  );
};
