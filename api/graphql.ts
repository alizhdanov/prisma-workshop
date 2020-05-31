import { schema } from 'nexus'

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.username()
    t.model.email()
    t.model.bio()
    t.model.image()
    t.model.articles()
  },
})

schema.objectType({
  name: 'Article',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.body()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.author()
  },
})

schema.inputObjectType({
  name: 'CreateArticleInput',
  definition(t) {
    t.string('title', { required: true })
    t.string('body', { required: true })
    t.int('authorId', { required: true })
  },
})

schema.queryType({
  definition(t) {
    t.crud.user({ alias: 'CRUD_user' })
    t.field('user', {
      type: 'User',
      args: {
        username: schema.stringArg({ required: true }),
      },
      resolve(_, { username }, { db }) {
        return db.user.findOne({
          where: {
            username,
          },
        })
      },
    })
    t.field('articles', {
      type: 'Article',
      list: true,
      resolve(_, __, { db }) {
        return db.article.findMany({
          orderBy: { updatedAt: 'desc' },
        })
      },
    })
    t.crud.users()
    t.crud.article()
    t.crud.articles({ alias: 'CRUD_articles' })
  },
})

schema.mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.deleteOneUser()
    t.crud.createOneArticle()
    t.field('createArticle', {
      type: 'Article',
      args: {
        data: schema.arg({ type: 'CreateArticleInput', required: true }),
      },
      resolve(_, { data: { authorId, ...data } }, { db }) {
        return db.article.create({
          data: {
            ...data,
            author: {
              connect: {
                id: authorId,
              },
            },
          },
        })
      },
    })
    t.crud.updateOneArticle()
    t.crud.deleteOneArticle()
  },
})
