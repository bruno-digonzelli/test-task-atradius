import { EMethods, IResponse } from "domain/entities";
import { getUsersUseCase } from "domain/useCases";
import { METHODS } from "../common";

export const UsersController = (method: EMethods, res: IResponse, data: any) => {
  switch(method) {
      case METHODS.GET:
      default:
        return getUsersUseCase(res, data);
    }
};