# AGENT.md - Full Project Blueprint & AI Developer Guidelines

## 1. Project Overview
**Project Name:** Capitiro (High-CPC Financial Utility Calculators)
**Target Audience:** US, UK, EU Markets.
**Monetization Strategy:** Ad-based Revenue (Google AdSense/Ezoic).
**Core Philosophy:** - **Zero Backend / Serverless:** All calculations must happen strictly on the client-side via JavaScript. No database.
- **YMYL (Your Money or Your Life) Standard:** Absolute trust, clean UI, and high mathematical accuracy.
- **Lightning Fast:** Utilize Next.js Static Site Generation (SSG) for instant page loads.

## 2. Tech Stack & Tools
- **Package Manager:** `pnpm` (STRICTLY ALWAYS USE `pnpm` instead of `npm`)
- **Framework:** Next.js (App Router strictly).
- **Styling:** Tailwind CSS.
- **UI Components:** Shadcn UI (Radix UI primitives).
- **Icons:** Lucide React.
- **Charts/Graphs:** Recharts (for interactive visualizations).
- **Fonts:** `Inter` (Primary, sans-serif) - Google Fonts.

## 3. Design System & Global CSS (`app/globals.css`)
Follow European/US UI standards: Clean, lots of whitespace, flat shadows.
Use the following Shadcn-compatible theme structure:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    /* Trustworthy Navy Blue */
    --primary: 221.2 83.2% 53.3%; 
    --primary-foreground: 210 40% 98%;
    /* Emerald Green for Accents/Success */
    --accent: 142.1 76.2% 36.3%; 
    --accent-foreground: 355.7 100% 97.3%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }
}
```

## 4. Development Workflow Rules (AI Instructions)

* **Component Separation:** `page.tsx` must remain **Server Components** (for SEO). Interactive logic (useState, useEffect, charts) must go into `/components/calculators/...` with `'use client'`.
* **Variable Declarations (Strict):** For any fixed value that will never be changed or updated, you must use `const`. Never use `let` or `var` for constants.
* **SEO Mandatory:** Every calculator page must export `generateMetadata` and include a `JSON-LD` structured data `<script>`.
* **Below the Fold Content:** Every calculator page must have SEO text: H2 "How to use", H2 "Formula Explained", and an Accordion FAQ section.

---

## 5. Development Roadmap: Phase-by-Phase Execution

To the AI Agent: Await the user's explicit prompt to execute a specific Phase. Do not execute everything at once.

### [ ] Phase 1: Initial Setup & Layout Design

**Goal:** Setup the boilerplate, design system, and global layout.

1. Initialize Next.js with Tailwind CSS.
2. Setup the `app/globals.css` with the provided color variables.
3. Install Shadcn UI and add core components: `npx shadcn-ui@latest add button card input label slider accordion`.
4. Install dependencies: `pnpm add recharts lucide-react`.
5. Create `components/layout/Navbar.tsx` (Logo, Links to calculators).
6. Create `components/layout/Footer.tsx` (Links to legal pages, copyright).
7. Apply Navbar and Footer to `app/layout.tsx`.

### [ ] Phase 2: Core Calculators Development (The MVPs)

**Goal:** Build the primary traffic-driving tools. Follow the separation of Client and Server components.

1. **Tool 1: Compound Interest Calculator**
* Pure math logic in `lib/math.ts` (calculate yearly/monthly compounding).
* Client Component: `components/calculators/CompoundInterest.tsx` (Inputs: Principal, Rate, Time, Contribution. Output: Recharts AreaChart).
* Server Component: `app/calculators/compound-interest/page.tsx` (SEO Title, Description, JSON-LD, and article content).


2. **Tool 2: Loan Amortization Calculator**
* Pure math logic in `lib/math.ts` (calculate EMI, Total Interest).
* Client Component: `components/calculators/LoanAmortization.tsx` (Inputs: Loan Amount, Interest, Tenure. Output: Monthly breakdown table & PieChart).
* Server Component: `app/calculators/loan-amortization/page.tsx`.


3. **Tool 3: SIP (Systematic Investment Plan) Return Calculator**
* Similar architecture as above, housed in `app/calculators/sip-return/page.tsx`.



### [ ] Phase 3: Legal Pages & Homepage Generation

**Goal:** Build the required pages for Google AdSense approval and user navigation.

1. **Homepage (`app/page.tsx`):**
* Create a clean hero section (e.g., "Smart Financial Projections").
* Create a Grid layout displaying Cards for each available calculator (Compound, Loan, SIP).


2. **Legal & Static Pages:**
* Create `app/about/page.tsx` (Detailing the mission of the site).
* Create `app/privacy-policy/page.tsx`.
* Create `app/terms-of-service/page.tsx`.
* Create `app/disclaimer/page.tsx` (Crucial: "Not financial advice, for educational purposes only").



### [ ] Phase 4: SEO Optimization & Deployment Prep

**Goal:** Finalize routing, sitemaps, and prepare for Vercel deployment.

1. Create `app/sitemap.ts` to programmatically return all static and calculator routes.
2. Create `app/robots.ts` (Allow all, point to sitemap).
3. Ensure every page has `generateMetadata` or static `metadata` configured.
4. Run `pnpm build` locally to ensure all Server Components compile into static HTML (SSG) correctly with no errors.
5. Provide the user with the final Vercel deployment commands.

---

*AI Agent: Acknowledge you have read this file when the user initializes the prompt, and ask which Phase you should begin with.*