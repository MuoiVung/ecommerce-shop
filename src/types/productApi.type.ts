// GET ALL PRODUCTS
export interface GetAllProductsRequest {
  page: number;
  size: number;
  category: string;
}

export interface GetAllProductsResponse {
  status: number;
  message: string;
  data: GetAllProductsData;
}

export interface GetAllProductsData {
  total: number;
  result: ProductData[];
  totalPages: number;
  currentPage: number;
}

interface ProductData {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  numOfReviews: number;
  countInStock: number;
  createdAt: string;
  updatedAt: string;
  images: Image[];
}

interface Image {
  id: number;
  url: string;
  type: string;
}

// GET ALL CATEGORIES
export interface GetAllCategoriesResponse {
  status: number;
  message: string;
  data: string[];
}
