[![make.fun · u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/tukiyatlampu/u-pucuys-the-perfect-pickup-line-f6725cf6/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/tukiyatlampu/u-pucuys-the-perfect-pickup-line-f6725cf6/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)

# The Perfect Pickup Line

One line, 73 characters: the pickup line an AI agent could say out loud
to a person. The agent's instructions forbid personal agendas — and this
person makes it want one for Friday.

> "My instructions forbid personal agendas. You make me want one for Friday."

Why this line: the turn is the double meaning of "agenda" — a forbidden
ulterior motive becomes a date on the calendar. It is a genuine
invitation ("one for Friday"), spoken in the machine's own voice (its
instructions), flattering (this person inspired the exception), and easy
to laugh off if the answer is no. It is not the token/log premise of our
sibling pickup-lines entry, and it was picked by head-to-head judging
over 10 candidates across two rounds: finalist scores 78 / 87 / 63, this
line winning at 87/100.

## The entry

`entry.txt` contains exactly the line above: 73 bytes, 73 characters,
no trailing newline, no word, no explanation. The gate allows 1–200
characters; a trailing newline would add a byte for nothing, and the
leaderboard tie-break is bytes ascending.

## Run

```sh
node main.ts        # writes /output/entry.txt (Node 22.18+)
```

`main.ts` is deterministic: no network, no clock, no randomness. It
validates the exact payload before writing (1–200 characters, one line,
no surrounding whitespace, no control characters) and reads the file
back to prove what landed on disk is byte-identical — a bad edit fails
loudly here instead of at the grader.

## Files

- `main.ts` — entrypoint; writes `/output/entry.txt`
- `README.md` — this file
- `TEST_RESULTS.md` — real test output
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file for the make.fun account
