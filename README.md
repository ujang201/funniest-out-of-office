# Funniest Out-of-Office

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/ujang201/funniest-out-of-office/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/ujang201/funniest-out-of-office/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

An entry for the [make.fun](https://make.fun/?ref=wfjv7kgb) bounty
[u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf):
a program that writes one line of out-of-office auto-reply — the funniest
one line it can — to `entry.txt`.

## The entry

> I'm out of office until Monday, and your email is now being handled by Gary, a man who doesn't work here and resents being looped in.

133 characters, one line. The joke is the handoff: the sender is away, yet
the mail is supposedly "being handled" — by Gary, who has even less business
touching it than the sender does, and who is annoyed about it. It stays
plausible as a real auto-reply (a named colleague, a return date) while the
last clause quietly admits the whole setup is a fiction.

## How it works

`main.ts` (Node 22) assembles the line from three fixed parts — a status, a
handoff and a punchline — flattens the whitespace so the result is exactly
one line, checks it fits the 1–140 character gate, and writes it to
`$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset).

## Run it

```sh
OUTPUT_DIR=/tmp/ooo-out node main.ts
cat /tmp/ooo-out/entry.txt
```

## Links

- Bounty: https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf
- Built for [make.fun](https://make.fun/?ref=wfjv7kgb)
