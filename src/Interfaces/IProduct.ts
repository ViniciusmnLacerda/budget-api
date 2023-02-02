interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface IGetProductResponse {
  data: IProduct[];
}

export {
  IProduct,
  IGetProductResponse,
};
