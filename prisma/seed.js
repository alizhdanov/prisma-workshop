const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

main()

async function main() {
  const tests = [
    {
      name: 'Should',
    },
    {
      name: 'Work',
    },
  ]

  // Could use Promise.all
  // Sequential here so that world IDs match the array order above

  for (const test of tests) {
    await db.test.upsert({
      where: { name: test.name },
      create: test,
      update: test,
    })
  }

  const results = await db.test.findMany()

  console.log('Seeded: %j', results)

  db.disconnect()
}
