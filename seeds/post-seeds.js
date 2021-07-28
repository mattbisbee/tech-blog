const { Post } = require('../models');

const postData = [{
        title: "So you're new to coding!",
        content: "Learning how to code can be a rewarding and, at the same time, frustrating process.",
        user_id: 1

    },
    {
        title: "Coding to find Francis.",
        content: "Where is Francis!?",
        user_id: 2
    },
    {
        title: "I'm the best there is at what I do, and what I do is coding!",
        content: "I can teach you the best way to improve your coding skills to make your projects as sharp as my claws.",
        user_id: 3
    },
    {
        title: "Creating a program to predict failure.",
        content: "If you've been coding a while, you're no stranger to failure. Join the club! I created this program to forsee the unforseen and perhaps grasp sweet victory!",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;