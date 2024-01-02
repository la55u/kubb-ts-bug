import { defineConfig } from "@kubb/core";
import createSwagger, { Exclude } from "@kubb/swagger";
import createSwaggerClient from "@kubb/swagger-client";
import createSwaggerTanstackQuery from "@kubb/swagger-tanstack-query";
import createSwaggerTS from "@kubb/swagger-ts";

export default defineConfig(async () => {
  return {
    root: ".",
    input: {
      path: "./openapi.yaml",
    },
    output: {
      path: "./gen",
      clean: true,
    },
    hooks: {
      done: ['prettier --write "./gen/*.ts"'],
    },
    plugins: [
      createSwagger({
        output: false,
        validate: false,
      }),
      createSwaggerTS({
        output: { path: "models.ts" },
      }),
      createSwaggerClient({
        dataReturnType: "data",
        output: { path: "./request.ts" },
        client: {importPath:"../client.ts"},
      }),
      createSwaggerTanstackQuery({
        dataReturnType: "data",
        output: { path: "hooks.ts" },
        client: {importPath:"../client.ts"},
        infinite: {},
      }),
    ],
  };
});
