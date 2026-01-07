
export enum ProductStatus {
  UNDETECTED = 'Undetected',
  UPDATING = 'Updating',
  DETECED = 'Detected'
}

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  status?: ProductStatus;
  statusLabel?: string;
  url: string;
  badge?: string;
}

export interface Section {
  title: string;
  description: string;
  products: Product[];
}
