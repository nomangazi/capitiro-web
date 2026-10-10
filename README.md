# Capitiro

Free, accurate and private financial calculators for the US, UK and Europe: mortgage, loan amortization, credit card
payoff, compound interest, SIP, retirement, savings goal and inflation. Includes guides and full SEO/AdSense setup.

Built with Next.js 16 (App Router, fully static), Tailwind CSS 4, shadcn/base-ui and Recharts. Deployed on Vercel.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # lint + math tests + production build
```

Copy `.env.example` to `.env.local` to set the site URL, contact email and AdSense ids.

## Project docs

- `.claude/PLAN.md`: roadmap and launch checklist
- `CLAUDE.md`: architecture and rules
- `.claude/skills/`: design system, new-calculator recipe, SEO and marketing playbook, AdSense compliance, deploy checklist
