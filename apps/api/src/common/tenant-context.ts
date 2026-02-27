import { JwtPayload } from '@repo/types';

export function getTenantId(user: JwtPayload): string {
  if (!user?.tenantId) {
    throw new Error('Tenant ID missing from user payload');
  }
  return user.tenantId;
}
