import { IResponse } from "../../entities";
import { getCommonUseCase } from "../common";

export const getHomepageUseCase = (res: IResponse): IResponse => {
    return getCommonUseCase(res, 200, {
      message: 'Hello Atradius'
    });
  }