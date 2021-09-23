'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        title: "Сбербанк",
        areaOfActivity: 'Банк',
        address: 'Россия, Москва, ул. Вавилова, 19.',
        link: "https://www.sberbank.ru",
        photo:"https://regnum.ru/uploads/pictures/news/2020/11/11/regnum_picture_160507890570607_normal.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Яндекс' ,
        areaOfActivity: "Поисковая система",
        address: 'Россия, Москва,ул. Льва Толстого, 16.',
        link: "https://yandex.ru",
        photo:"https://avatars.mds.yandex.net/get-bunker/135516/b5d842dd0e03a26c54749891dd1b0876edbae05d/orig",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Газпром",
        areaOfActivity: 'Энергетическая компания',
        address: 'Россия, Москва, ул. Наметкина, д. 16.',
        link: "https://www.gazprom.ru",
        photo:"https://upload.wikimedia.org/wikipedia/ru/thumb/2/2d/Gazprom-Logo-rus.svg/1280px-Gazprom-Logo-rus.svg.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Vprok.ru Перекресток",
        areaOfActivity: 'Онлайн-гипермаркет',
        address: 'Россия, Москва, Средняя Калитниковская улица, дю 28 ',
        link: "https://www.Vprok.ru",
        photo:"https://hhcdn.ru/ichameleon/180465.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "BNS group",
        areaOfActivity: 'Дистрибьютор модной одежды',
        address: 'Россия, Москва, ул. Бакунинская, д. 73',
        link: "https://www.bns-group.ru",
        photo:"https://hhcdn.ru/employer-logo/3107576.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Nordic IT Denmark ApS",
        areaOfActivity: 'Информационные технологии',
        address: 'Россия, Санкт-Петербург,  улица Маршала Говорова, д. 35',
        link: "https://nordic-it.com/",
        photo:"https://hhcdn.ru/employer-logo/3605140.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "S7 IT",
        areaOfActivity: 'Авиакомпания',
        address: 'Россия, Новосибирск, ул. Фрунзе, 4.',
        link: "https://s7.ru",
        photo:"https://hhcdn.ru/employer-logo/2199500.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Yota",
        areaOfActivity: 'Телекоммуникационная компания',
        address: 'Россия, Москва,ул. Оружейный переулок, д. 41',
        link: "https://www.yota.ru",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Yota.png/450px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Yota.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "МТС",
        areaOfActivity: 'Телекоммуникационная компания',
        address: 'Россия, Москва, ул. Марксистская, д.4',
        link: "https://www.mts.ru",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MTS_logo.svg/1200px-MTS_logo.svg.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Московский аэропорт Домодедово",
        areaOfActivity: 'Международный аэропорт',
        address: 'Россия, Москва, улица Тверская – Ямская 1-я, д. 2',
        link: "https://www.dme.ru",
        photo:"https://bastion-integrator.com/wp-content/uploads/dme.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Лента",
        areaOfActivity: 'Сеть гипермаркетов',
        address: 'Россия, Москва, ул. Наметкина, д. 16.',
        link: "https://lenta.com/",
        photo:"https://p2.zoon.ru/preview/gzS7ccJarvR5egGGOwdfJA/2400x1500x85/1/4/f/original_5745ed7b40c088c3398b4e94_599ea4598c053.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Связной",
        areaOfActivity: 'Федеральная розничная сеть',
        address: 'Россия, Москва, ул. 2-й Хорошёвский проезд, д. 9',
        link: "https://job.svyaznoy.ru/",
        photo:"https://hhcdn.ru/ichameleon/167169.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ЦУМ",
        areaOfActivity: 'Интернет-магазин',
        address: 'Россия, Москва, ул. Кутузовский проспект, д. 31А',
        link: "https://www.tsum.ru/",
        photo:"https://allcashbacks.com/web/uploads/2017/05/Cum-logo.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Северсталь",
        areaOfActivity: 'Горнодобывающая компания',
        address: 'Россия, г. Череповец, ул. Мира, д. 30',
        link: "https://www.severstal.com/",
        photo:"https://www.severstal.com/rus/about/brand/images/tild3564-3536-4865-b538-323131316438__4.svg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
