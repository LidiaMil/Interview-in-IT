const { OrganizationQuestion,LanguageQuestion,Categorey,Interview,Question, User, Language, Organization, Comment } = require('./db/models');

async function newss(){
const news = await Interview.findOne({
  include: [
    {
      model: User
    },
    {
      model: Question
    },
    {
      model: Categorey
    },
    {
      model: Organization
    },
  ],
  where:{id:5}
});

}

newss()
