import { prisma } from "../lib/prisma.js";

export class ProfileRepository {
  static create(data: { id: string; email: string; fullName: string }) {
    return prisma.profile.create({
      data,
    });
  }

  static findById(id: string) {
    return prisma.profile.findUnique({
      where: {
        id,
      },
    });
  }
}
