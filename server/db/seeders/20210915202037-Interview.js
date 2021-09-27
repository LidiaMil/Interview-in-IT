'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Interviews', [
      {
        name: "Ведущий разработчик OpenText",
        description:'Разрабатывать решения на платформе OpenText и xECM, разрабатывать под программные продукты SAP и интеграционные решения и т.д.',
        data: new Date(),
        level: "middle",
        favorites:false,
        categorey_id:5,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Python - разработчик",
        description:'Проектировать и разрабатывать backend-части проектов. Решать прикладные и продуктовые задач на различных фреймворках и т.д.',
        data: new Date(),
        level: "junior",
        favorites:false,
        categorey_id:2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     { name: "Frontend - разработчик",
      description:'Разрабатывать интерфейсные компоненты: инфраструктура и веб-интерфейсы в зависимости от проекта/продукта и т.д.',
      data: new Date(),
      level: "senior",
      favorites:false,
      categorey_id:2,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: "Java – разработчик в Сбере",
        description:'Сбер сегодня — это более 60 компаний экосистемы, которые создают уникальные, технологичные продукты для миллионов пользователей. ',
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
        description:'Доработка клиентского API для сайтов, мобильных приложений, телеграм ботов в связи с новыми идеями от продактов (а идей очень много);',
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
        description:`Поиск и привлечение кандидатов с помощью порталов вакансий, баз данных, социальных сетей и т.д. 
        На работе буде необходимо закрывать вакансии по направлению Tech;
        выстраивать долгосрочные отношения с заказчиками;`,
        data: new Date(),
        level: "senior",
        favorites:false,
        categorey_id:1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "IT-рекрутер",
        description:'Поиск и привлечение кандидатов с помощью порталов вакансий, баз данных. Подготовка и размещение вакансий на соответствующих порталах вакансий',
        data: new Date(),
        level: "senior",
        favorites:false,
        categorey_id:1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Junior DevOps",
        description:'Первичная диагностика инцидентов, настройка мониторинга и правка воркфлоу в jira. Активное изучение современного DevOps инструментария.  ',
        data: new Date(),
        level: "junior",
        favorites:false,
        categorey_id:2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Графический дизайнер",
        description:'Подготовка пресс-макетов по текущим проектам и предпечатная подготовка, подготовка статичных интернет-баннеров и т.д.',
        data: new Date(),
        level: "junior",
        favorites:false,
        categorey_id:1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Аналитик данных",
        description:'Осуществлять поддержку и развитие автоматизированных аналитических решений и т.д.',
        data: new Date(),
        level: "senior",
        favorites:false,
        categorey_id:3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Менеджер ИТ-продукта",
        description:'Развитие, эксплуатация и техническая поддержка ИТ продуктов\сервисов в зоне ответственности команды и т.д.',
        data: new Date(),
        level: "senior",
        favorites:false,
        categorey_id:2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
         {
        name: "Lead QA engineer",
        description:'Обеспечивать качество и проводить тестирование технических и бизнес проектов в yota модемах, yota веб приложениях и т.д.',
        data: new Date(),
        level: "senior",
        favorites:false,
        categorey_id:4,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Junior Разработчик C#",
        description:'Создание и поддержка программных роботов, десктоп-приложений, веб-приложений т.д.',
        data: new Date(),
        level: "senior",
        favorites:false,
        categorey_id:4,
        user_id: 1,
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
