'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Interviews', [
      {
        name: "Java – разработчик в Сбере",
        description:'Сбер сегодня — это более 60 компаний экосистемы, которые создают уникальные, технологичные продукты для миллионов пользователей. Мы собираем лучшие технологии и управленческие методы из мировой практики, а масштабы компании и система поддержки сотрудников открывают возможности для карьеры в любом направлении и с любым уровнем амбиции.',
        data: new Date(),
        level: "middle",
        favorites:false,
        categorey_id:1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Backend C# разработчик",
        description:'доработка клиентского API для сайтов, мобильных приложений, телеграм ботов в связи с новыми идеями от продактов (а идей очень много);',
        data: new Date(),
        level: "middle + ",
        favorites:true,
        categorey_id:2,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "IT-рекрутер",
        description:'Поиск и привлечение кандидатов с помощью порталов вакансий, баз данных, социальных сетей и т.д.',
        data: new Date(),
        level: "senior",
        favorites:false,
        categorey_id:1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
