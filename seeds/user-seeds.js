const { User } = require('../models');

const userData = [{
        username: 'Matt_84',
        password: 'MattCoder1234!',
        email: 'testEmail@email.com'

    },
    {
        username: 'Wade_12',
        password: 'Deadpoolforever5432!',
        email: 'seriouslyWhereIsHe@francis.com'
    },
    {
        username: 'Logan_2017',
        password: 'AdamantiumIsVibranium!',
        email: 'metalHead@email.com'
    },
    {
        username: 'Loki_07',
        password: 'GloriousPurposeBurden1!',
        email: 'KingofBetrayl@email.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;