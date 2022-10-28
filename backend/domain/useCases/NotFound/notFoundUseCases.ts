import { IResponse } from "../../entities";
import { getCommonUseCase } from "../common";

export const getNotFoundUseCase = (res: IResponse): IResponse => {
    return getCommonUseCase(res, 404, {
      message: 'Page not found'
    });
  }