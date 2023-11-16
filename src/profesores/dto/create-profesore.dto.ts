import { IsString } from "class-validator";


export class CreateProfesoreDto {
    @IsString()
    id: number;
    @IsString()
    name: string
}
