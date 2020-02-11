# Migration `20200210184335-3`

This migration has been generated by new name at 2/10/2020, 6:43:35 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "dt"."Idea" ADD COLUMN "user" text   ;

ALTER TABLE "dt"."Idea" ADD FOREIGN KEY ("user") REFERENCES "dt"."User"("id") ON DELETE SET NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200208154912-2..20200210184335-3
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
@@ -20,5 +20,6 @@
   username      String 
   email         String       @unique 
   password      String
   cratedAt      DateTime     @default(now())
+  ideas          Idea[]
 }
```

