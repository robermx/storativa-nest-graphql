import { NotFoundException } from "@nestjs/common";

export const envConfigurator = () => {
  const nodeEnv = process.env.NODE_ENV;
  const port = process.env.PORT;
  const mongoDbDatabase = process.env.MONGODB_DATABASE;
  const mongoPort = process.env.MONGODB_PORT;
  const mongoDbUri = process.env.MONGODB_URI
  const jwtSecret = process.env.JWT_SECRET;

  if (!nodeEnv) {
    throw new NotFoundException('NODE_ENV environment variable is not set');
  }

  if (!port) {
    throw new NotFoundException('PORT environment variable is not set');
  }

  if (!mongoDbDatabase) {
    throw new NotFoundException('MONGODB_DATABASE environment variable is not set');
  }
  if (!mongoPort) {
    throw new NotFoundException('MONGODB_PORT environment variable is not set');
  }
  if (!mongoDbUri) {
    throw new NotFoundException('MONGODB_URI environment variable is not set');
  }

  if (!jwtSecret) {
    throw new NotFoundException('JWT_SECRET environment variable is not set');
  }

  return {
    NODE_ENV: nodeEnv,
    PORT: parseInt(port, 10),
    MONGODB_DATABASE: mongoDbDatabase,
    MONGODB_PORT: parseInt(mongoPort, 10),
    MONGODB_URI: mongoDbUri,
    JWT_SECRET: jwtSecret,
  };
};
