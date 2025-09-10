import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@my/api"; // shared type from packages/api

export const trpc = createTRPCReact<AppRouter>();
