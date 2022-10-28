
export type SendType<ResBody = any, T = IResponse<ResBody>> = (body?: ResBody) => T;

export interface IResponse<ResBody = any, StatusCode = number> {
  status: (statusCode: StatusCode) => this;
  json: SendType<ResBody, this>;
}