import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export let usersList = [...Array(24)].map((_, index) => ({
    id: faker.string.uuid(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: faker.person.fullName(),
    company: faker.company.name(),
    isVerified: faker.datatype.boolean(),
    status: sample(['actif', 'Interdit']),
    role: sample([
        'Leader',
        'Hr Manager',
        'Project Manager',
        'Admin',
        'client'
    ]),
}));

 export let users = [
    //{ email: 'admin@gmail.com', password: 'admin', roles: ['Admin'] },
    //{ email: 'client@gmail.com', password: 'client', roles: ['client'] },
     {
         id: faker.string.uuid(),
         email: 'admin@gmail.com',
         password: 'admin',
         avatarUrl: `/assets/images/avatars/avatar_${20 + 1}.jpg`,
         name: faker.person.fullName(),
         company: faker.company.name(),
         isVerified: faker.datatype.boolean(),
         status: sample(['actif', 'Interdit']),
         role: ['Admin']
     },
     {
         id: faker.string.uuid(),
         email: 'client@gmail.com',
         password: 'client',
         avatarUrl: `/assets/images/avatars/avatar_${21 + 1}.jpg`,
         name: faker.person.fullName(),
         company: faker.company.name(),
         isVerified: faker.datatype.boolean(),
         status: sample(['actif', 'Interdit']),
         role: ['client'],
     },
     ...usersList
];

export enum ROLE {
    Manager = "Manager",
    Admin = "Admin",
    Client = "Client",
}
