'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('category', [
      {
        title: "JS",
        description: "A high-level programming language that is primarily used for web development to create interactive elements and dynamic behavior on websites.", 
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHV2Z87xRzBnjlDlyYKW6XYelGnXh8zh6zPb972GExw&ec=48665701", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "Node",
        description: "A runtime environment that allows JavaScript to be executed outside of a web browser, enabling server-side and command-line application development.", 
        imageURL: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework that provides a set of pre-designed classes to rapidly build custom user interfaces.", 
        imageURL: "https://repository-images.githubusercontent.com/130268121/b4fd5300-b585-11ea-8718-1e141e78842e", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "React",
        description: "A JavaScript library for building user interfaces, particularly for single-page applications, using reusable UI components and a virtual DOM for efficient rendering.", 
        imageURL: "https://ntu.edu.pk/ehunar/wp-content/uploads/2021/08/ReactJS.jpg", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "Express",
        description: "A minimalistic and flexible web application framework for Node.js that simplifies the process of building server-side web applications and APIs.", 
        imageURL: "https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png", 
        createdAt: new Date(), 
        updatedAt: new Date()
      }

    ], {});

  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('category', null, {});

  }
};
