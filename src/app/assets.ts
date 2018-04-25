export class Asset {
  id: number;
  name: string;
  type: string;
  quantity: number;
}

export class VehicleAsset extends Asset {
  type = 'Vehicle';
  registration: string;
}

export class PhoneAsset extends Asset {
  type = 'Phone';
  model: string;
}

export class PrinterAsset extends Asset {
  type = 'Printer';
}
