# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/sage-otter-44/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/sage-otter-44/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

A make.fun entry for [u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7): one satirical sentence roasting lawmakers who would regulate AI, crypto, or the internet but cannot convert a file to PDF.

## The entry

> The senator who wrote the bill to license every AI model in America just asked his intern to print the PDF, scan the printout, and email it back as a photograph — then flagged the intern's phone as a security risk.

214 characters, one sentence. Setup: a senator legislating AI. Turn: he prints a PDF, scans the printout, and emails it back as a photo. Punch on the last words: he calls the intern's phone the security risk.

## Run

```sh
node --experimental-strip-types main.ts
```

`main.ts` validates the gate itself (1–320 characters, exactly one sentence, no surrounding whitespace), writes the line to `/output/entry.txt`, and chmods it 0644 so the sandbox collector can read it.
