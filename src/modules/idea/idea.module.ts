import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaResolver } from './idea.resolver';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [IdeaService, IdeaResolver]
  ,imports: [
    SharedModule
  ]
})
export class IdeaModule {}
