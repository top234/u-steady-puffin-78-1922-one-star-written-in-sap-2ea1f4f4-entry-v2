// One Star, Written in Sap — v2 entry.
// Writes a single one-line, one-star houseplant review to $OUTPUT_DIR/entry.txt.
// Node stdlib only. Deterministic: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. He waters me with ice cubes, then blames me for leaning toward the window — I am not reaching for the light, I am trying to climb out through it before he moves me again.";

// Gate: the competition requires 1-279 characters, a single line, not only spaces.
if (REVIEW.length < 1 || REVIEW.length > 279) {
  throw new Error(`Review must be 1-279 characters, got ${REVIEW.length}.`);
}
if (REVIEW.includes("\n") || REVIEW.trim().length === 0) {
  throw new Error("Review must be exactly one non-blank line.");
}

const outputDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), REVIEW + "\n", "utf8");
console.log(`Wrote entry.txt: ${REVIEW.length} characters, one line, starts with "One star.".`);
