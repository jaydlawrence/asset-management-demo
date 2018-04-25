import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const asset = [
      { id: 11, name: 'Mr. Nice', type: 'Phone', quantity: 1 },
      { id: 12, name: 'Narco', type: 'Vehicle', quantity: 1 },
      { id: 13, name: 'Bombasto', type: 'Test', quantity: 1 },
      { id: 14, name: 'Celeritas', type: 'Printer', quantity: 1 },
      { id: 15, name: 'Magneta', type: 'Blah', quantity: 1 },
      { id: 16, name: 'RubberMan', type: 'Test', quantity: 1 },
      { id: 17, name: 'Dynama', type: 'Phone', quantity: 1 },
      { id: 18, name: 'Dr IQ', type: 'Pritner', quantity: 1 },
      { id: 19, name: 'Magma', type: 'Phone', quantity: 1 },
      { id: 20, name: 'Tornado', type: 'Phone', quantity: 2 }
    ];
    return {asset};
  }
}
