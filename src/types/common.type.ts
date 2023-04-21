export type NavigateProductParamType = {
  productId: string;
};

export type BreadcrumbsType = {
  name: string;
  path?: string;
};

export type ProductInfoType = {
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
  images: ImageType[];
};

type ImageType = {
  id: number;
  url: string;
  type: string;
};
