import { schema } from 'nexus'

schema.objectType({
  name: 'Test',
  definition(t) {
    t.model.id()
    t.model.name()
  },
})

// schema.queryType({
//   definition(t) {
//     t.crud.world()
//     t.crud.worlds()
//   },
// })

// schema.mutationType({
//   definition(t) {
//     t.crud.createOneWorld()
//     t.crud.updateOneWorld()
//     t.crud.deleteOneWorld()
//   },
// })

// schema.queryType({
//   definition(t) {
//     t.field('hello', {
//       type: 'World',
//       args: {
//         world: schema.stringArg({ required: false }),
//       },
//       async resolve(_root, args, ctx) {
//         const worldToFindByName = args.world ?? 'Earth'
//         const world = await ctx.db.world.findOne({
//           where: {
//             name: worldToFindByName,
//           },
//         })

//         if (!world) throw new Error(`No such world named "${args.world}"`)

//         return world
//       },
//     })

//     t.list.field('worlds', {
//       type: 'World',
//       resolve(_root, _args, ctx) {
//         return ctx.db.world.findMany()
//       },
//     })
//   },
// })
