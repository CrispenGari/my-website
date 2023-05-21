const environment = "dev";

export const baseUrl =
  environment === "dev"
    ? "http://localhost:3001"
    : "https://crispengari-server.onrender.com";
