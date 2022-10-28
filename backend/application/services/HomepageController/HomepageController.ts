import { EMethods, IResponse } from "domain/entities";
import { getHomepageUseCase } from "domain/useCases";
import { METHODS } from "../common";

export const HomepageController = (method: EMethods, res: IResponse) => {
  switch(method) {
      case METHODS.GET:
      default:
        return getHomepageUseCase(res);
    }
};