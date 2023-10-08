import { defineConfig } from "@kubb/core";

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
      [
        "@kubb/swagger",
        {
          output: false,
          validate: true,
        },
      ],
      [
        "@kubb/swagger-ts",
        {
          output: "models.ts",
          enumType: "asPascalConst",
        },
      ],
      [
        "@kubb/swagger-client",
        {
          output: "./request.ts",
          client: "./client.ts",
        },
      ],
    ],
  };
});
