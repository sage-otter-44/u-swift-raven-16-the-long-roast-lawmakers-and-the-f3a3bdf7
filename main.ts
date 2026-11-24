import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const ENTRY =
  "The senator who wrote the bill to license every AI model in America just asked his intern to print the PDF, scan the printout, and email it back as a photograph \u2014 then flagged the intern's phone as a security risk.";

// Gate check (mirrors the sealed scorer): 1-320 chars, not only whitespace,
// exactly one sentence so the roast reads clean in a single pass.
const trimmed = ENTRY.trim();
if (trimmed.length < 1 || trimmed.length > 320) {
  throw new Error(`Entry is ${trimmed.length} chars; gate requires 1-320.`);
}
if (trimmed !== ENTRY) throw new Error("Entry has leading/trailing whitespace.");
if ((trimmed.match(/\./g) ?? []).length !== 1 || !trimmed.endsWith(".")) {
  throw new Error("Entry must be exactly one sentence.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644); // collectors run as another user
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
