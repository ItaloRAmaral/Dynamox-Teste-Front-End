export interface IProduct {
  id: number;
  name: string;
  price: number;
  perishable: string;
  expirationDate: string | null;
  manufactureDate: string;
  quantity: number;
}

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
}
