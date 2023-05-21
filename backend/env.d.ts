// types for your environmental variables
declare namespace NodeJS {
  export interface ProcessEnv {
    SENDER_PASSWORD: string;
    DATABASE_PASSWORD: string;
    DATABASE_USERNAME: string;
    SESSION_SECRETE: string;
  }
}
