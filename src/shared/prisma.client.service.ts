import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaClientService extends PrismaClient implements OnModuleInit,OnModuleDestroy {
    onModuleInit() {
        return this.prisma.connect();
    }
    onModuleDestroy() {
        return this.prisma.disconnect();
    }
    private readonly prisma: PrismaClient = new PrismaClient();

    constructor(){
        super();
    }

    
}
