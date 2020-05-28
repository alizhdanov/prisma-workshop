import { schema } from 'nexus'

// Define types

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.bio()
    t.model.image()
    t.model.articles()
  },
})

schema.objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.body()
    t.model.user()
  },
})

schema.inputObjectType({
  name: 'PostCreateInput',
  definition(t) {
    t.string('title', { required: true })
    t.string('body', { required: true })
  },
})

// Define queries

schema.queryType({
  definition(t) {
    t.crud.users()
    t.crud.posts()
    t.crud.post()

    t.field('user', {
      type: 'User',
      args: {
        email: schema.stringArg({ required: true }),
      },
      resolve(root, args, ctx, info) {
        return ctx.db.user.findOne({
          where: {
            email: args.email,
          },
        })
      },
    })
  },
})

// Define mutations
schema.mutationType({
  definition(t) {
    t.crud.updateOneUser()
    t.crud.updateOnePost()

    t.field('createUser', {
      type: 'User',
      args: {
        data: schema.arg({
          type: schema.inputObjectType({
            name: 'UserCreateInput',
            definition(t) {
              t.string('email', { required: true })
              t.string('bio')
              t.string('image')
            },
          }),
          required: true,
        }),
      },
      resolve(_, { data }, { db }) {
        return db.user.create({ data })
      },
    })

    t.field('createArticle', {
      type: 'Post',
      args: {
        data: schema.arg({
          type: 'PostCreateInput',
          required: true,
        }),
        authorEmail: schema.idArg({ required: true }),
      },
      async resolve(_, { data, authorEmail }, { db }) {
        const user = await db.user.findOne({ where: { email: authorEmail } })

        if (!user) {
          throw new Error('Unable to find author with give email 😭')
        }

        return db.post.create({
          data: {
            ...data,
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        })
      },
    })
  },
})
