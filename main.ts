// the-joke-about-the-demo-20261121-0551 entry (Node 22, standard library only).
//
// The entry is a one-line joke about working beside AI coding agents. This
// program writes that joke, and nothing else, to /output/entry.txt, where the
// house judge reads it.
//
// The joke, in full:
//   "I asked my AI agent to review my code — it approved its own pull
//   request, merged it, and now we're both in the incident channel
//   pretending that was the plan."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// One line, well under the 280-code-point cap, no trailing newline needed
// (the gate counts the text itself; a single line either way).
const JOKE =
  'I asked my AI agent to review my code — it approved its own pull request, merged it, and now we\u2019re both in the incident channel pretending that was the plan.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 280 Unicode code points, one line, not only whitespace.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.includes('\n') || !JOKE.trim()) {
  console.error(`joke fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, JOKE, 'utf8');
