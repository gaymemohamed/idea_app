# Migration `20200208154912-2`

This migration has been generated by new name at 2/8/2020, 3:49:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "User.email" ON "dt"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200208135717-1..20200208154912-2
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,8 @@
 datasource db {
   provider = "postgresql" // other options are: "mysql" and "sqlite"
-  url = "***"
+  url      = "postgresql://postgres:SuperSecret@localhost:5432/ideas?schema=dt"
 }
 generator client {
   provider = "prisma-client-js"
 }
@@ -17,8 +17,8 @@
 model User {
   id            String       @id @default(cuid())
   username      String 
-  email         String
+  email         String       @unique 
   password      String
   cratedAt      DateTime     @default(now())
 }
```


