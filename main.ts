// Loading Screen Gold: A Tip in 200 Characters — make.fun bounty
// u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
//
// Writes one sharp, funny loading-screen tip to /output/entry.txt
// (UTF-8, one line, 1-200 characters).
//
// The hook is the undo you cannot press. Version control rescues code for
// both sides of the keyboard — the stressed human and the AI coding agent
// can both revert to a previous commit — but neither of them can roll back
// themselves. The laugh lands in the last few words: Ctrl+Z works on the
// code, not on your personality.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Stuck in a recursion loop? Both humans and models can revert to a previous commit — but you can't Ctrl+Z your personality.";

// Gate guard: the sealed scorer only accepts a tip of 1–200 characters.
// Refuse to write anything outside that range instead of shipping an
// invalid entry that scores 0 and takes no prize.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry tip must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
