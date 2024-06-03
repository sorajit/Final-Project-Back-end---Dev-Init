import { PartialType } from "@nestjs/mapped-types";
import { LogDto } from "./log.dto";

export class UpdateLogDto extends PartialType(LogDto){}