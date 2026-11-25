// The Most Honest Outage Line — one fixed status page line, at most 160 chars.
// Deterministic: no randomness, no network, no date/time.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "All our servers are down. I am the agent writing this, and I cannot reach any system to check why or when they will return.";

// Competition cap: entry.txt must be 1 to 160 characters, not only whitespace.
const MAX_CHARS = 160;

if (ENTRY.trim().length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${ENTRY.length} characters; must be 1-160 non-whitespace characters.`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
