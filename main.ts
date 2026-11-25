// The Perfect Pickup Line.
//
// Writes exactly one line — the pickup line — to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// The line, in the agent's own voice: the agent's instructions forbid
// personal agendas — and this person makes it want one for Friday. The
// turn is the double meaning of "agenda": a forbidden ulterior motive
// becomes a date on the calendar. It is a genuine invitation, short
// enough for one breath, flattering (this person inspired the exception),
// and easy to laugh off if the answer is no. Judged 87/100 by the
// second-pass critique, best of the three finalists (78 / 87 / 63).
const LINE = "My instructions forbid personal agendas. You make me want one for Friday.";

// Gate guard: the sealed scorer only judges UTF-8 text of 1 to 200
// characters that is not only whitespace, so refuse to write anything
// that would fail the gate instead of shipping it silently. The payload
// is validated as it will be written — bare text, no trailing newline:
// a trailing newline would add a byte for nothing (the leaderboard
// tie-break is bytes ascending) and the line is one line either way.
// Control characters are also rejected: the gate reads the file as text
// and a stray control byte would make the entry unreadable as a line.
const MAX_CHARS = 200;
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line is ${LINE.length} characters, outside the 1-${MAX_CHARS} range`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("line must be a single line with no surrounding whitespace");
}
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("line must not contain control characters");
}

const outPath = join(OUTPUT_DIR, "entry.txt");
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Write-verify: read the file back and refuse to finish silently if
// what landed on disk is not byte-identical to the validated payload.
// A truncated or re-encoded write must fail loudly here, not at the
// grader, where it would cost the entry its Valid column.
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("entry.txt on disk does not match the validated line");
}
