// The Absurd Clause Contest — a one-line entry for make.fun.
// The program writes exactly one sentence to /output/entry.txt:
// a terms-of-service clause that reads as perfectly ordinary legal
// boilerplate until the absurdity lands. The clause: your shadow
// belongs to the company, 9 to 5, and it may be borrowed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, 121 characters — deadpan ToS boilerplate
// ("By using this service, you agree...") that quietly declares your
// shadow company property, borrowable without notice.
const ENTRY =
  "By using this service, you agree that your shadow is company property from 9am to 5pm and may be borrowed without notice.";

// The grader mounts a fresh, writable /output and sets MAKEFUN_OUTPUT_DIR
// to it; locally the same variable points at a scratch dir. Fall back to
// the literal /output path so the program also runs bare.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate accepts only 1–200 characters; fail loudly instead of
// ever writing an over-long line. No trailing newline: the file holds
// exactly the sentence, nothing else.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
