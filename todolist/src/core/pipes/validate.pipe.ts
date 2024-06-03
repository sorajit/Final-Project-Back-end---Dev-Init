import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
   public async transform(value, metadata: ArgumentMetadata) {
      try {
        return await super.transform(value, metadata);
      } catch (e) {
         if (e instanceof BadRequestException) {
            const error_str = JSON.stringify(e.getResponse()); 
            const error_json = JSON.parse(error_str).message;
            throw new UnprocessableEntityException(error_json);
         }
      }
   }
}