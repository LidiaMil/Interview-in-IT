'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        text: "Что такое паттерн в реакте и какие знаешь?",
        interview_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Как правильно подключать скрипт и чем отличается атрибуты asinc и defer?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Типы данный. Чем отличается null от undefined?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что не нравится в js?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Чем отличается == от ===?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что будет, если undefined привести числовому значению?",
        interview_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Как нумеруются элементы массива?",
        interview_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "У кого есть свойство length?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },   
         {
        text: "Какие значения переменных можно копировать?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что такое замыкание?",
        interview_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Какие методы у функций для установки контекста вам известны и отличие call от apply?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Как удалить объекта класса?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Принципы ООП",
        interview_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что такое __proto__?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что такое прототип?",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Являются ли примитивы instanceof своего класса?",
        interview_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Когда используется переменная self?",
        interview_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Зачем создаются геттеры и сеттеры?",
        interview_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что такое защищенные свойства и методы? Когда они используются?",
        interview_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что делает метод Object.create(null) ?",
        interview_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Как получать все стилевые описания для элемента?",
        interview_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Как правильно задавать стили?",
        interview_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Как склонировать объект?",
        interview_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Как сделать, чтоб при изменениях в одной вкладке это данные изменялись и в другой автоматически?",
        interview_id: 8,
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
