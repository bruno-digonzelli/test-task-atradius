import { EMethods, IResponse } from "domain/entities";
import { getNotFoundUseCase } from "domain/useCases";
import { METHODS } from "../common";

export const NotFoundController = (method: EMethods, res: IResponse) => {
  switch(method) {
      case METHODS.GET:
      default:
        return getNotFoundUseCase(res);
    }
};