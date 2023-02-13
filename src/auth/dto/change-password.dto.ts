import { Match } from "@utils/decorators";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ChangePasswordDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    new_password: string;


    @IsNotEmpty()
    @MinLength(6)
    @Match('new_password')
    confirm_new_password: string;
}