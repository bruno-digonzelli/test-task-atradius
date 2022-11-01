/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

const port = import.meta.env.PORT ?? 3000;
export const API_URL = `http://localhost:${port}`;