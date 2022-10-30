import React from "react";

export interface IServiceHOC {
  children: React.ReactNode;
  endpoint: string;
}