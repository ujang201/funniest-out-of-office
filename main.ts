// funniest-out-of-office — writes a single out-of-office line to entry.txt.
//
// The line is assembled from three hand-picked parts (a status, a handoff
// and a punchline) by a tiny composer. The composer keeps exactly one
// combination: the parts are fixed in source, the join is a plain space, and
// nothing is random, so every run produces the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The three parts of the reply. The joke lives in the handoff: the sender
// is away, yet the mail is "being handled" — by someone who has even less
// business touching it than the sender does.
const parts = {
  status: "I'm out of office until Monday,",
  handoff: "and your email is now being handled by Gary,",
  punchline: "a man who doesn't work here and resents being looped in.",
};

// Join the parts with single spaces and make sure the result is exactly
// one line: any stray newline inside a part would break the gate, so the
// composer flattens whitespace before emitting.
function compose({ status, handoff, punchline }: typeof parts): string {
  return [status, handoff, punchline]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function destination(): string {
  const dir = process.env.OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const line = compose(parts);

  // The gate allows 1..140 characters; stay well inside it and fail loudly
  // instead of shipping a line the scorer would refuse.
  if (line.length === 0 || line.length > 140) {
    throw new Error(`entry is ${line.length} characters, must be 1..140`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const out = destination();
  // Create the output directory itself (dirname, not a join trick) so a
  // fresh sandbox with an empty OUTPUT_DIR works on the first run.
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, line + "\n", "utf8");
}

main();
