export const envConfigurator = () => {
  const nodeEnv = process.env.NODE_ENV || 'local';
  const port = process.env.PORT;
  const mongoDbDatabase = process.env.MONGODB_DATABASE;
  const mongoPort = process.env.MONGODB_PORT;
  const mongoDbUri = process.env.MONGODB_URI;

  if (!nodeEnv) {
    throw new Error('NODE_ENV environment variable is not set');
  }

  if (!port) {
    throw new Error('PORT environment variable is not set');
  }

  if (!mongoDbDatabase) {
    throw new Error('MONGODB_DATABASE environment variable is not set');
  }
  if (!mongoPort) {
    throw new Error('MONGODB_PORT environment variable is not set');
  }
  if (!mongoDbUri) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  return {
    NODE_ENV: nodeEnv,
    PORT: parseInt(port, 10),
    MONGODB_DATABASE: mongoDbDatabase,
    MONGODB_PORT: parseInt(mongoPort, 10),
    MONGODB_URI: mongoDbUri,
  };
};
