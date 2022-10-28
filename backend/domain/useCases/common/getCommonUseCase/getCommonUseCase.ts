import { IResponse } from "../../../../domain/entities";

export const getCommonUseCase = (res: IResponse, statusCode: number, body: any): IResponse => {
  return res.status(statusCode).json({
      ...body
    });
};