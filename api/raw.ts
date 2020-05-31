const postgres = require('postgres')
export const sql = postgres(
  'postgresql://prisma:prisma@localhost:5432/postgres',
)
