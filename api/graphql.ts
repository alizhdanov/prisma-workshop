import { schema } from 'nexus'

schema.objectType({
  name: 'Test',
  definition(t) {
    t.model.id()
    t.model.name()
  },
})

schema.queryType({
  definition(t) {
    t.crud.test()
    t.crud.tests()
  },
})

schema.mutationType({
  definition(t) {
    t.crud.createOneTest()
    t.crud.updateOneTest()
    t.crud.deleteOneTest()
  },
})
