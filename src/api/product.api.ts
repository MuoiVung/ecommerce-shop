import {
  GetAllCategoriesResponse,
  GetAllProductsData,
  GetAllProductsRequest,
  GetAllProductsResponse,
  IGetProductDetailData,
  IGetProductDetailResponse,
} from "@typess/productApi.type";
import apiSlice from ".";
import { Params } from "react-router-dom";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<
      GetAllProductsData,
      Partial<GetAllProductsRequest>
    >({
      query: (params) => ({
        url: "products",
        method: "GET",
        params,
      }),
      transformResponse: (response: GetAllProductsResponse) => response.data,
      providesTags: [{ id: "List", type: "Product" }],
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => "products/get-all-categories",
      transformResponse: (response: GetAllCategoriesResponse) => response.data,
    }),
    getProductDetail: builder.query<IGetProductDetailData, string>({
      query: (productId: string) => `products/${productId}`,
      transformResponse: (response: IGetProductDetailResponse) => response.data,
      providesTags: (result, error, arg) => [
        {
          type: "Product",
          id: arg,
        },
      ],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetProductDetailQuery,
} = productApiSlice;
