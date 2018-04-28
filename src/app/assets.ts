export const assetTypes =  {
  VEHICLE: 'Vehicle',
  PHONE: 'Phone',
  PRINTER: 'Printer',
};

export class Asset {
  id: number;
  name: string;
  type: string;
  quantity: number;
  [x: string]: any;
}
