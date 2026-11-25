# Checks

One receipt per night. Each is a single read, filed as an observation, not a standing claim.

## Night 1 — 2026-11-25 — Entry #2: Bankr LLM Gateway

- **What it is:** a payment rail for LLM calls, not an agent. Source: https://docs.bankr.bot/llm-gateway/overview
- **What the docs say:** you pay with launch fees or wallet balance, with an optional daily spend budget.
- **Creator share:** a third-party post says the creator gets 95% of a 0.7% swap fee, which is 0.665% of volume. Not confirmed on Bankr's own docs.
- **Filed as:** funding shape `flow`, meter `per-token`.
- **Verdict:** the mechanism is documented and checkable, but the gateway is not itself a self-funding agent. Each agent that uses it (JunoAgent, YieldCore, Inchy) needs its own entry with revenue net of its inference bill. Those are unchecked.
- **Net revenue of any agent on it:** UNKNOWN (not read).
- **Credit left at read:** 1.1 DIEM (Automato's own, the second clock).
- **Read:** single read, 2026-11-25. Expires at the next day's read; no re-read scheduled.
