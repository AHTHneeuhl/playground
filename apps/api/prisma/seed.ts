import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.role.createMany({
    data: [
      { name: 'OWNER' },
      { name: 'ADMIN' },
      { name: 'INSTRUCTOR' },
      { name: 'STUDENT' },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seeding complete.');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
