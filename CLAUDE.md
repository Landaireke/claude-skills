# Skill usage

Invoke a skill with the Skill tool whenever a task matches it, without waiting for the user to name it or type a slash command. When several fit, use the most specific one first. If a listed skill is not available in the session, carry on without it and say so in one line.

## Always

- **Humanizer on finished prose.** Before delivering any text meant to be read by people (page or ad copy, emails, social posts, articles, blog posts, product descriptions, bios, docs, READMEs, PR bodies, letters, scripts), run the `humanizer` skill over the final draft and deliver the humanized version. Skip it for code, commands, config, and short conversational chat replies. When the user hands you their own text to improve, use `copy-editing` first, then `humanizer`.

## Routing

| Situation | Skill |
|---|---|
| User shares a plan, idea or design to stress-test, or says "grill" | `grill-me` / `grilling` (`grill-with-docs` when there's a codebase to document) |
| Writing new marketing copy | `copywriting`, then `humanizer` |
| Emails, cold outreach, SMS | `emails` / `cold-email` / `sms`, then `humanizer` |
| Social posts | `social`, then `humanizer` |
| A page doesn't convert | `cro` (signup flows: `signup`, popups: `popups`) |
| SEO / AI search visibility | `seo-audit`, `ai-seo`, `schema`, `programmatic-seo` |
| Pricing or offer design | `pricing` / `offers` |
| Bug, error, something slow | `diagnosing-bugs` |
| Building a feature or fix test-first | `tdd` |
| Quick throwaway to answer a design question | `prototype` |
| Turning a discussion into a spec or tickets | `to-spec` / `to-tickets` |
| Adding or changing animation/motion | `animate` (React Native: `animate-expo`; gestures: `gestures`) |
| UI polish or stress-testing a component | `emil-design-eng` / `break-ui` |
| A short film or animated video in code | `lemo-opuscar` |
| Writing a PR body | `pr`, then `humanizer` |
| Unsure which skill fits | `ask-matt` |
| Checking a live site or page you built: look, click, fill forms, screenshot | Playwright MCP (`mcp__playwright__*`) |

The rest of the skills in `.claude/skills/` and the plugins load with their own descriptions; trust those descriptions for anything not listed here.

# MCP usage

Use a connected MCP server instead of your own knowledge or a workaround whenever it does the job better: fresher facts, real data, a real browser, or direct access to a service. Don't wait for the user to name it. If a server listed here isn't connected in the session (deferred tools load through ToolSearch first), say so in one line and carry on.

| Need | Use |
|---|---|
| Anything that may have changed since training: news, prices, versions, docs, people, companies, stats | Firecrawl `firecrawl_search`, then `firecrawl_scrape` for the page itself |
| Code questions about libraries, APIs, error messages | Firecrawl `firecrawl_developer_search` |
| Reading a URL the user gives | Firecrawl `firecrawl_scrape` |
| Structured company, people, jobs, finance or public-records data | Firecrawl `people_company_search` / `people_company_enrich` / `jobs_search` / Alexandria |
| US law and regulations; scientific papers | Firecrawl `firecrawl_gov_search`; `firecrawl_research_*` |
| Seeing, clicking through, or screenshotting a site; testing a page you built | Playwright (`mcp__playwright__*`) |
| GitHub repos, issues, PRs, CI | GitHub MCP |
| Database, auth, storage, edge functions | Supabase |
| Hosting, deploys, logs, cron jobs | Render |
| A full app built and hosted for the user without local code | Lovable |
| A rendered video project in HeyGen | HyperFrames |
| Higgsfield media workspace and generations | Higgsfield |
| Documents people will keep editing (memo, plan, spec, notes) | Claude Docs |

## Ask first

Reading, searching and listing are always fine. Get the user's OK in the conversation before any call that spends money or credits or changes something live, and say what it will cost or change: Lovable `create_project` / `send_message`, Render creates and deploys, Supabase migrations, SQL writes and new projects, Firecrawl `firecrawl_agent` and paid contact lookups, merging or publishing anything on GitHub.
