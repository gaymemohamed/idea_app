# Migration `20200208121758-0`

This migration has been generated by new name at 2/8/2020, 12:17:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "dt"."Idea" (
    "cratedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "decription" text  NOT NULL DEFAULT '',
    "id" text  NOT NULL ,
    "idea" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200208121758-0
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+
+datasource db {
+  provider = "postgresql" // other options are: "mysql" and "sqlite"
+  url      = "postgresql://postgres:SuperSecret@localhost:5432/ideas?schema=dt"
+}
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Idea {
+  id             String       @id @default(cuid())
+  idea           String 
+  cratedAt       DateTime  @default(now())
+  decription     String
+
+}
```

