import 'express';

declare module 'express' {
  interface Request {
    user?: {
      sub: string;
      tenantId: string;
      role: string;
    };
  }
}
