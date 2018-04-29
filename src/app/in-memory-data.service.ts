import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const asset = [
      {
        id: 11,
        name: 'Myiphone',
        type: 'Phone',
        quantity: 1,
        brand: 'Apple',
        model: 'iphone X',
      },
      {
        id: 12,
        name: 'TheTesla',
        type: 'Vehicle',
        quantity: 1,
        registration: 'MSG WEGG',
        fuelType: 'electric',
      },
      {
        id: 13,
        name: 'OfficePrinter',
        type: 'Printer',
        quantity: 1,
        voltage: 220,
      },
      {
        id: 14,
        name: 'MyPixel',
        type: 'Phone',
        quantity: 1,
        brand: 'Google',
        model: 'pixel 2 XL',
      },
      {
        id: 15,
        name: 'MyNote',
        type: 'Phone',
        quantity: 1,
        brand: 'Samsung',
        model: 'Galaxy Note 8',
      },
      {
        id: 16,
        name: 'MyTruck',
        type: 'Vehicle',
        quantity: 1,
        registration: 'MSG 12WE',
        fuelType: 'diesel',
      },
      {
        id: 17,
        name: 'TheMini',
        type: 'Vehicle',
        quantity: 1,
        registration: 'M23 36GG',
        fuelType: 'petrol',
      },
      {
        id: 18,
        name: 'KitchenPrinters',
        type: 'Printer',
        quantity: 2,
        voltage: 110,
      },
      {
        id: 19,
        name: 'LarrysPhone',
        type: 'Phone',
        quantity: 1,
        brand: 'Samsung',
        model: 'Galaxy S 3',
      },
      {
        id: 20,
        name: 'TechPhone',
        type: 'Phone',
        quantity: 1,
        brand: 'HTC',
        model: 'Desire',
      },
    ];
    return {asset};
  }
}
