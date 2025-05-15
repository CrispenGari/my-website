const environment: string = "prod";

export const baseUrl =
  environment === "dev"
    ? "http://localhost:3001"
    : "https://crispengari.onrender.com";
