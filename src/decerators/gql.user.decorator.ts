import { createParamDecorator } from "@nestjs/common";

export const AuthUser = createParamDecorator(
    (data, [root, args, ctx, info]) => ctx.req.user,
)














