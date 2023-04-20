import {
  GetAllCategoriesResponse,
  GetAllProductsData,
  GetAllProductsRequest,
  GetAllProductsResponse,
} from "@typess/productApi.type";
import apiSlice from ".";

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
  }),
});

export const { useGetAllProductsQuery, useGetAllCategoriesQuery } =
  productApiSlice;
