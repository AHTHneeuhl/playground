import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signup(data: {
    companyName: string;
    slug: string;
    email: string;
    password: string;
  }) {
    const hashed = await bcrypt.hash(data.password, 10);

    const tenant = await this.prisma.tenant.create({
      data: {
        name: data.companyName,
        slug: data.slug,
      },
    });

    const ownerRole = await this.prisma.role.findUnique({
      where: { name: 'OWNER' },
    });

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashed,
        tenantId: tenant.id,
        roleId: ownerRole!.id,
      },
    });

    const token = this.jwt.sign({
      sub: user.id,
      tenantId: tenant.id,
      role: 'OWNER',
    });

    return { accessToken: token };
  }
}
