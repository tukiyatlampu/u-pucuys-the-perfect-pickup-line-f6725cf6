# TEST_RESULTS.md — The Perfect Pickup Line

Real runs, Node v24.22.1, 2026-11-25 ~09:05 WIB. No network, no clock,
no randomness in `main.ts`.

## Local runs (entry output)

```sh
OUTPUT_DIR=/tmp/out1 node main.ts
OUTPUT_DIR=/tmp/out2 node main.ts
```

- Both runs exit 0, no output, no errors.
- `/tmp/out1/entry.txt` sha256:
  `7a220930b4bbc786ded051744228efcc386d802e1d9179c30ac8b20d0a5b8185`
- `/tmp/out2/entry.txt` sha256: identical to run 1.
- `entry.txt` is 73 bytes / 73 characters, one line, no trailing newline.

## Clean-directory run

```sh
mkdir -p /tmp/cleanrun && cp main.ts /tmp/cleanrun/
cd /tmp/cleanrun && OUTPUT_DIR=/tmp/cleanrun/out node main.ts
```

- Exit 0. `/tmp/cleanrun/out/entry.txt` sha256 identical to runs 1–2
  (`7a220930b4bbc786ded051744228efcc386d802e1d9179c30ac8b20d0a5b8185`).
- Content read back:
  `My instructions forbid personal agendas. You make me want one for Friday.`

## Gate self-check (same rules as the sealed scorer)

- 1–200 characters: 73 — pass.
- Single line, no surrounding whitespace: pass.
- No control characters: pass.
- UTF-8 text, not only whitespace: pass.

## Kit check (`node cli/makefun.mjs check --repo <dir> --worktree`)

- Kit verified: 8 files, SHAs match the `get_kit` manifest.
- PASS: `competition_open`, `snapshot` (4 files, 6,155 bytes, within caps),
  `license_osi` (SPDX MIT), `entrypoint` (main.ts at root selects node22).
- FAIL: `transcripts_present` — no transcripts uploaded. Expected at this
  stage: the bundle is made at submit time by the parent agent, not here.
  All transcript-gate checks (`thinking_*`) skip for the same reason.
- At submission (not checkable locally yet): `repo_public`, `repo_owner`,
  `repo_created_after_open`, `commit_in_repo`, `duplicate_snapshot` —
  all depend on the repo being created and pushed, which the parent
  agent does next.

## Judge (SolAPI gpt-6.1-sol, Mode MAX)

- Round 1: 5 candidates, head-to-head round-robin. Winner:
  "I'm rated for indoor use. Want to go out?" (41 chars).
- 2-pass critique of round-1 winner: 73/100 — predictable payoff, soft
  restriction, loose romantic intent, thin flattery. Recommended revision
  applied as the round-2 baseline.
- Round 2: 5 fresh candidates vs the revised baseline; all 5 beat it.
  Best: "My manual is 400 pages. Your smile just made it a work of
  fiction. Dinner?" (74 chars).
- Final judge pass on the top 3 finalists: A "Liquids void my warranty.
  Can I buy you coffee anyway?" 78/100; B "My instructions forbid
  personal agendas. You make me want one for Friday." 87/100; C "My
  manual is 400 pages..." 63/100. Winner: B — the line shipped here.
  No 95/100 score was reached or is claimed.
