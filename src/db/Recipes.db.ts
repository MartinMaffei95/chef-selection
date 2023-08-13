import { Recipe } from '../interfaces';

export const recipes: Recipe[] = [
  {
    title: 'Memanbetsu Airport',
    imageUrl: '/src/assets/images/recipes/cookies.webp',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    servings: 77,
    prepTime: 98,
    cookTime: 7,
    tags: ['salad', 'italian'],
    ingredients: [
      { name: 'Lobster - Tail 6 Oz', quantity: 18.3, unit: 'tsp', position: 1 },
      {
        name: 'Pork - Ham Hocks - Smoked',
        quantity: 41.1,
        unit: 'tsp',
        position: 2,
      },
      {
        name: 'Table Cloth 120 Round White',
        quantity: 99.7,
        unit: 'tsp',
        position: 3,
      },
      { name: 'Ginger - Fresh', quantity: 56.8, unit: 'tbsp', position: 4 },
      {
        name: 'Arizona - Plum Green Tea',
        quantity: 40.1,
        unit: 'ml',
        position: 5,
      },
      { name: 'Grapes - Black', quantity: 41.3, unit: 'tbsp', position: 6 },
      {
        name: 'Cookies - Englishbay Wht',
        quantity: 7.9,
        unit: 'kg',
        position: 7,
      },
      { name: 'Loaf Pan - 2 Lb, Foil', quantity: 69.0, unit: 'l', position: 8 },
      { name: 'Cream - 35%', quantity: 11.7, unit: 'ml', position: 9 },
    ],
    instructions: [
      {
        stepNumber: 1,
        description:
          'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
        image: 'http://dummyimage.com/101x116.png/ff4444/ffffff',
      },
      {
        stepNumber: 2,
        description:
          'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
        image: 'http://dummyimage.com/210x161.png/cc0000/ffffff',
      },
      {
        stepNumber: 3,
        description: 'Nam dui.',
        image: 'http://dummyimage.com/171x228.png/ff4444/ffffff',
      },
      {
        stepNumber: 4,
        description:
          'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
        image: 'http://dummyimage.com/186x148.png/5fa2dd/ffffff',
      },
      {
        stepNumber: 5,
        description:
          'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        image: 'http://dummyimage.com/214x108.png/5fa2dd/ffffff',
      },
      {
        stepNumber: 6,
        description:
          'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
        image: 'http://dummyimage.com/109x103.png/5fa2dd/ffffff',
      },
      {
        stepNumber: 7,
        description:
          'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        image: 'http://dummyimage.com/207x197.png/cc0000/ffffff',
      },
      {
        stepNumber: 8,
        description:
          'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        image: 'http://dummyimage.com/121x118.png/ff4444/ffffff',
      },
      {
        stepNumber: 9,
        description:
          'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        image: 'http://dummyimage.com/236x140.png/dddddd/000000',
      },
      {
        stepNumber: 10,
        description:
          'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        image: 'http://dummyimage.com/201x229.png/ff4444/ffffff',
      },
    ],
    notes:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    id: 'a2b352c2-4950-4814-a3b4-4842d104ac3a',
  },
  {
    title: 'Marinduque Airport',
    imageUrl: '/src/assets/images/recipes/spaghetti.webp',
    tags: ['pasta', 'vegetarian'],

    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    servings: 77,
    prepTime: 10,
    cookTime: 67,
    ingredients: [],
    instructions: [
      {
        stepNumber: 1,
        description:
          'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
        image: 'http://dummyimage.com/208x105.png/dddddd/000000',
      },
      {
        stepNumber: 2,
        description:
          'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
        image: 'http://dummyimage.com/169x130.png/ff4444/ffffff',
      },
      {
        stepNumber: 3,
        description:
          'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        image: 'http://dummyimage.com/220x238.png/dddddd/000000',
      },
      {
        stepNumber: 4,
        description:
          'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        image: 'http://dummyimage.com/187x138.png/5fa2dd/ffffff',
      },
      {
        stepNumber: 5,
        description: 'In eleifend quam a odio.',
        image: 'http://dummyimage.com/186x157.png/ff4444/ffffff',
      },
      {
        stepNumber: 6,
        description:
          'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        image: 'http://dummyimage.com/196x179.png/cc0000/ffffff',
      },
      {
        stepNumber: 7,
        description:
          'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        image: 'http://dummyimage.com/156x172.png/5fa2dd/ffffff',
      },
    ],
    notes:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    id: 'dcbdcb8c-2cf6-4449-bcff-7c18cb2d8261',
  },
  {
    title: 'Toccoa Airport - R.G. Letourneau Field',
    imageUrl: '/src/assets/images/recipes/tequenhos.webp',
    tags: ['mexican', 'vegetarian', 'fried'],

    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    servings: 59,
    prepTime: 81,
    cookTime: 27,
    ingredients: [],
    instructions: [
      {
        stepNumber: 1,
        description:
          'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        image: 'http://dummyimage.com/140x187.png/ff4444/ffffff',
      },
      {
        stepNumber: 2,
        description:
          'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
        image: 'http://dummyimage.com/176x221.png/5fa2dd/ffffff',
      },
    ],
    notes:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    id: '7864f411-6758-4458-b650-983e4f41e34a',
  },
  {
    title: 'Greenville Downtown Airport',
    imageUrl: '/src/assets/images/cat/salad.webp',
    tags: ['salad', 'vegetarian'],

    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    servings: 30,
    prepTime: 15,
    cookTime: 53,
    ingredients: [
      {
        name: 'The Pop Shoppe - Cream Soda',
        quantity: 68.3,
        unit: 'tbsp',
        position: 1,
      },
      {
        name: 'Herb Du Provence - Primerba',
        quantity: 24.2,
        unit: 'g',
        position: 2,
      },
      { name: 'Bok Choy - Baby', quantity: 85.8, unit: 'ml', position: 3 },
      { name: 'Lumpfish Black', quantity: 8.2, unit: 'l', position: 4 },
      { name: 'Crackers - Trio', quantity: 44.0, unit: 'cup', position: 5 },
    ],
    instructions: [
      {
        stepNumber: 1,
        description:
          'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        image: 'http://dummyimage.com/108x209.png/ff4444/ffffff',
      },
      {
        stepNumber: 2,
        description: 'Phasellus sit amet erat. Nulla tempus.',
        image: 'http://dummyimage.com/163x166.png/dddddd/000000',
      },
      {
        stepNumber: 3,
        description:
          'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
        image: 'http://dummyimage.com/208x204.png/dddddd/000000',
      },
      {
        stepNumber: 4,
        description:
          'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
        image: 'http://dummyimage.com/150x131.png/dddddd/000000',
      },
      {
        stepNumber: 5,
        description:
          'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        image: 'http://dummyimage.com/245x172.png/ff4444/ffffff',
      },
      {
        stepNumber: 6,
        description: 'Integer a nibh. In quis justo.',
        image: 'http://dummyimage.com/115x121.png/ff4444/ffffff',
      },
      {
        stepNumber: 7,
        description:
          'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
        image: 'http://dummyimage.com/201x196.png/ff4444/ffffff',
      },
      {
        stepNumber: 8,
        description:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
        image: 'http://dummyimage.com/221x146.png/cc0000/ffffff',
      },
      {
        stepNumber: 9,
        description:
          'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        image: 'http://dummyimage.com/243x115.png/dddddd/000000',
      },
    ],
    notes:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    id: '3fdb04f3-d189-4905-95e4-851b4c8e5cad',
  },
];
