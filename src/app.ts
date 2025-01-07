import express, { Request, Response } from "express";

const app: express.Express = express();
const port = process.env.PORT || 3000;

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Test endpoint
app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Test endpoint working successfully",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
