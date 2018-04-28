import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const asset = [
      {
        id: 11,
        name: 'My iphone',
        type: 'Phone',
        quantity: 1,
        brand: 'Apple',
        model: 'iphone X',
      },
      {
        id: 12,
        name: 'The Tesla',
        type: 'Vehicle',
        quantity: 1,
        registration: 'MSG WEGG',
        fuelType: 'electric',
      },
      {
        id: 13,
        name: 'Office Printer',
        type: 'Printer',
        quantity: 1,
        voltage: 220,
      },
      {
        id: 14,
        name: 'My Pixel',
        type: 'Phone',
        quantity: 1,
        brand: 'Google',
        model: 'pixel 2 XL',
      },
      {
        id: 15,
        name: 'My Note',
        type: 'Phone',
        quantity: 1,
        brand: 'Samsung',
        model: 'Galaxy Note 8',
      },
      {
        id: 16,
        name: 'My Truck',
        type: 'Vehicle',
        quantity: 1,
        registration: 'MSG 12WE',
        fuelType: 'diesel',
      },
      {
        id: 17,
        name: 'The Mini',
        type: 'Vehicle',
        quantity: 1,
        registration: 'M23 36GG',
        fuelType: 'petrol',
      },
      {
        id: 18,
        name: 'Kitchen Printers',
        type: 'Printer',
        quantity: 2,
        voltage: 110,
      },
      {
        id: 19,
        name: 'Larry\'s Phone',
        type: 'Phone',
        quantity: 1,
        brand: 'Samsung',
        model: 'Galaxy S 3',
      },
      {
        id: 20,
        name: 'Tech Phone',
        type: 'Phone',
        quantity: 1,
        brand: 'HTC',
        model: 'Desire',
      },
    ];
    return {asset};
  }
}
