import express, { Request, Response } from 'express';

export const app = express();

export const createServer = () => {
  // Health check endpoint
  app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  });

  // Test endpoint
  app.get('/test', (req: Request, res: Response) => {
    res.status(200).json({
      message: 'Test endpoint working successfully',
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};
