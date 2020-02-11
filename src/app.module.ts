import { Module } from '@nestjs/common';
import { IdeaModule } from './modules/idea/idea.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
     IdeaModule,
     GraphQLModule.forRoot({
       autoSchemaFile: 'schema.gql',
       context: ({ req }) => ({ req }),
     }),
     UserModule,
     AuthModule,  
  ],
  
})
export class AppModule {}
