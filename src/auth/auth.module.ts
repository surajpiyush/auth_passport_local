import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { PassportLocalStrategy } from "./passport.local.strategy";

@Module({
    imports:[UserModule],
    exports:[],
    controllers:[],
    providers:[PassportLocalStrategy]
})
export class AuthModule {
      
}