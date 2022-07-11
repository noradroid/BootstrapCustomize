import { CardData } from './card-data.model';

export const cardData: CardData[] = [
  {
    title: 'Food Eaten',
    description:
      'Here lies all the food that has been eaten in the past 30 days. You will find entries such as meat, vegetables, drinks, soup, fast food, restaurants... etc.',
    dateCreated: new Date('January 1, 2022'),
    dateUpdated: new Date(Date.now()),
    owner: 'Mister Leaper',
    status: true,
  },
  {
    title: 'Electricity Used',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laborum fuga, veritatis perspiciatis dolorem quasi, aut quaerat ' +
      'repellat at voluptate facilis beatae ut, eveniet labore neque enim similique consequatur numquam omnis praesentium! Ipsa laudantium ' +
      'consequuntur ut voluptates sit tempora soluta iste praesentium minus. Provident minus facilis, doloribus cumque modi illo?',
    dateCreated: new Date('January 30, 2022'),
    dateUpdated: new Date('July 4 2022'),
    owner: 'Mister Leaper',
    status: true,
  },
  {
    title: 'Paper Used',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laborum fuga, veritatis perspiciatis dolorem quasi, aut quaerat ' +
      'repellat at voluptate facilis beatae ut, eveniet labore neque enim similique consequatur numquam omnis praesentium! Ipsa laudantium',
    dateCreated: new Date('January 31, 2022'),
    dateUpdated: new Date('July 5 2022'),
    owner: 'Mister Leaper',
    status: true,
  },
  {
    title: 'Time Spent',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laborum fuga.',
    dateCreated: new Date('January 31, 2022'),
    dateUpdated: new Date(Date.now()),
    owner: 'Mister Leaper',
    status: false,
  },
  {
    title: 'Mileage On The Road',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laborum fuga, veritatis perspiciatis dolorem quasi, aut quaerat ' +
      'repellat at voluptate facilis beatae ut, eveniet labore neque enim similique consequatur numquam omnis praesentium! Ipsa laudantium ' +
      'consequuntur ut voluptates sit tempora soluta iste praesentium minus. Provident minus facilis, doloribus cumque modi illo?',
    dateCreated: new Date('January 30, 2022'),
    dateUpdated: new Date(Date.now()),
    owner: 'Mister Leaper',
    status: false,
  },
];
