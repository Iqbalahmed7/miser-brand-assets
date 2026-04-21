# 06 — Motion

Miser moves slowly and on purpose. Motion is never decoration; it either
communicates a state change or it doesn't belong.

## Principles

1. **Slow.** Default duration: 500–800ms for content, 200ms for UI feedback.
2. **Linear or ease-out.** No bouncy, no spring. Never ease-in-out unless
   the motion has a clear start and end.
3. **One thing at a time.** Sequence, don't stagger.
4. **Quiet on arrival.** No attention-grabbing entrances. Elements fade in,
   lines draw in, numbers tick up — they do not pop, pulse, or shake.

## The Tally animation (signature)

The primary mark doubles as the brand's canonical loading state.

- Each of the four vertical strokes draws in sequentially (stroke-dashoffset 60 → 0)
- 500ms per stroke, 500ms gap between strokes
- After all four, the diagonal slash draws in (stroke-dashoffset 90 → 0, 600ms)
- Total: ~3s for one full tally
- Loop indefinitely while a run is active
- When a save lands, one stroke appears in real time (faster: 200ms)

The animation is one of three things at any given moment:
- **Looping** — a run is active, savings are accruing
- **Completing** — a run finished, the final slash draws in
- **Held** — a static tally as logo or mark

## Other motion

| Surface           | Motion                                                     |
| ----------------- | ---------------------------------------------------------- |
| Numbers ticking   | Count up over 400ms, ease-out, monospace never shifts      |
| Page transitions  | 200ms cross-fade, no slide                                 |
| Hover states      | 150ms opacity/colour change, nothing moves position        |
| Reveal on scroll  | Do not use. If the content's worth reading, show it.       |
| Confetti          | Never.                                                     |

## What never moves

- The wordmark
- Body text
- Headings
- The Ledger Line (it's a mark of something completed; it shouldn't wobble)
