import { IResponse } from "../../entities";
import { getCommonUseCase } from "../common";

export const getUsersUseCase = (res: IResponse, data: any): IResponse => {
    return getCommonUseCase(res, 200, {
      message: data
    });
  }