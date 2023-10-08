import { registerUser } from "./gen";

async function main() {
  const res = registerUser({ displayName: "foo" });
}
