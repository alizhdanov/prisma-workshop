# Migration `20200525212250-remove-no-null-constraints-from-user-model-fields`

This migration has been generated by Ali Zhdanov at 5/25/2020, 9:22:50 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "prisma-workshop"."User" (
"bio" text   ,"email" text  NOT NULL ,"id" SERIAL,"image" text   ,
    PRIMARY KEY ("id"))

CREATE TABLE "prisma-workshop"."Post" (
"body" text  NOT NULL ,"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"id" SERIAL,"title" text  NOT NULL ,"updateAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "prisma-workshop"."User"("email")

DROP TABLE "prisma-workshop"."World";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200525212118-add-user-and-post-model..20200525212250-remove-no-null-constraints-from-user-model-fields
--- datamodel.dml
+++ datamodel.dml
@@ -1,18 +1,18 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator prisma_client {
   provider = "prisma-client-js"
 }
 model User {
-  id    Int    @default(autoincrement()) @id
-  email String @unique
-  bio   String
-  image String
+  id    Int     @default(autoincrement()) @id
+  email String  @unique
+  bio   String?
+  image String?
 }
 model Post {
   id        Int      @default(autoincrement()) @id
```

