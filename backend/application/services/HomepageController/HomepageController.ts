import { EMethods, IResponse } from "domain/entities";
import { getHomepageUseCase } from "domain/useCases";

export const METHODS = {...EMethods};

export const HomepageController = (method: EMethods, res: IResponse) => {
  switch(method) {
      case METHODS.GET:
      default:
        return getHomepageUseCase(res);
    }
};