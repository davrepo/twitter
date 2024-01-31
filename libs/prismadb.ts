// Singleton pattern for Prisma client
// an implementation of the singleton pattern for a Prisma client in a Node.js environment. The singleton pattern is a design pattern that ensures a class has only one instance and provides a global point of access to it. 

// Instance Check and Creation: The line const client = globalThis.prisma || new PrismaClient() checks if an instance of PrismaClient already exists in the globalThis object (a standard JavaScript object that provides a way to store global variables). If it does exist, it uses that instance; if not, it creates a new instance of PrismaClient.

// Storing the Instance Globally: The line if (process.env.NODE_ENV !== "production") globalThis.prisma = client assigns the PrismaClient instance to globalThis.prisma if the environment is not production. This ensures that the same instance is reused in subsequent imports of this module in a non-production environment.

// Exporting the Client: The PrismaClient instance is exported for use in other parts of the application.

// This pattern is particularly useful in the context of database clients like PrismaClient, where you typically want to reuse a single connection pool across your application, rather than creating a new client (and hence a new connection pool) every time you need to interact with the database. This can be more efficient and prevent issues such as running out of database connections.

import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client