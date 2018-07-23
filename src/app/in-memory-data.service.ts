import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 1,  name: 'Dick Rider' },
            { id: 2,  name: 'Stan' },
            { id: 3,  name: 'Leo' },
            { id: 4,  name: 'Rex Power Colt' },
            { id: 5,  name: 'Jagger' },
            { id: 6,  name: 'RubberMan' },
            { id: 7,  name: 'Patrick Callahan' },
            { id: 8,  name: 'Patricia Callahan' },
            { id: 9,  name: 'FV' },
            { id: 10, name: 'FA' }
        ];
        return { users };
    }
}
