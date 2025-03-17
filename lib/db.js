import { PrismaClient } from "@prisma/client";

// TODO: Get Google cloud api keys and install prisma
require('dotenv').config()
export const prismaClient = new PrismaClient();