import { IsString } from "class-validator";

export class CreateMateriaDto {
    @IsString()
    id: number;
    @IsString()
    name: string;
}
