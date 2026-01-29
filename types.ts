export enum ProductStatus {
  UNDETECTED = 'Undetected',
  UPDATING = 'Updating',
  DETECTED = 'Detected'
}

export interface ProductOption {
  label: string;
  price: string;
  stock: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  gallery?: string[];
  status?: ProductStatus;
  statusLabel?: string;
  url: string;
  badge?: string;
  options?: ProductOption[];
  tags?: string[];
}

export interface Section {
  title: string;
  description: string;
  products: Product[];
}