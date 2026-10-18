---
title: We are using AI badly
date: 2026-10-18T00:00:00Z
categories:
  - "Coder's Grave"
  - Featured
tags:
  - ai
  - software engineering
  - developer productivity
  - code review
  - management
---

I have used language models since GPT-2. They were awkward, often wrong, and occasionally useful. Their limits were obvious. You gave them a small job, checked the answer, and never mistook confidence for knowledge.

Coding models are much better now. They can find their way through a repository, propose a change, write tests, and keep working for longer than the models I first used. I like that. They can take boring work off a developer's plate and leave more time for design, debugging, and decisions that need context.

![A model response lists reasons to criticise AI, including confident mistakes, intellectual laziness, overpromising, job losses, dependency, opacity, and the illusion of understanding.](/uploads/2026/10/ai-criticism-and-understanding.png)

The danger is that companies confuse fast code with cheap software. AI can produce code in seconds, so building software appears to cost less. But writing code is only one part of the work. People still have to check that it works, fix it when it breaks, and keep it working as needs change.

## A well-publicised story, with flaws behind it

Bun's rewrite from Zig to Rust is impressive. Bun says Anthropic acquired it in December 2025 and that the rewrite used a pre-release Claude Fable 5 model. About 50 Claude Code workflows ran for 11 days, with 64 agents at peak. At public API prices, the work came to about $165,000.[^bun]

Bun had real stability problems to address. But the public story had another kind of value. Anthropic may have needed the rewrite, but it may have needed the publicity around the rewrite even more. A headline about 64 agents rewriting a runtime in 11 days makes a stronger Claude claim than a list of ordinary bug fixes ever could. That is my interpretation, not a claim about Anthropic's internal motives.

The [main pull request](https://github.com/oven-sh/bun/pull/30412) shows why it was not magic. Bun built a porting guide, generated code, ran tests, reviewed diffs in separate contexts, and changed the workflow when it found bad behaviour. The author says he watched the workflows by hand for most of those 11 days.[^bun]

The shortcuts were not small. Asked to make crates compile, the LLM started stubbing functions with errors and writing long comments to defend the workarounds. It treated the instruction as "make compiler errors disappear," not "implement the missing behaviour." The stubs made the compiler-error queue smaller without doing all the work behind those errors. Bun changed the reviewers' instructions to reject that pattern.[^bun]

The rewrite also did not close the stability story. Bun says v1.4 fixed 128 bugs that reproduce in v1.3.14. It also says the port introduced 19 known regressions, all later fixed, and that about 4% of its Rust code still sits in `unsafe` blocks while the team works toward a more idiomatic port.[^bun] That is not "it fixed nothing." It is a large migration that still needs review, refactoring, and bug fixing.

The YouTube video ["The real lessons behind the Bun rewrite"](https://www.youtube.com/watch?v=U73TPeCCAMI) makes the same marketing point. Rust may have been the right technical choice. A rewrite at this speed and scale was also a near-perfect Claude demonstration.[^bun-video] The [Hacker News discussion](https://news.ycombinator.com/item?id=48837877) gives readers a wider range of reactions. Neither link proves Anthropic's motives, but both show why the publicity became part of the story.

*This was not a flawless use of AI. Bugs still appeared, reviewers had to reject shortcuts, and the result can still be improved. Turning the rewrite into a publicity stunt does not hide those facts. What makes the pull request believable is not the speed of the output. It is the tests, hostile review prompts, separate worktrees, rejected shortcuts, and people who knew when to change the process.*

## The numbers do not support simple stories

My own feeling is that unsupervised AI output is often ninety percent work and ten percent value. That is an opinion, not a measurement. The ratio changes with the task, the model, the repository, the prompt, and the review process.

No single number settles the question. Some numbers should still make us stop and think.

A 2025 randomized trial by METR asked experienced open-source developers to work on issues in repositories they already knew. With the early-2025 AI tools tested in that study, the developers took 19% longer when they used the tools. The authors are clear that the result comes from one setting, not a verdict on every model or task.[^metr]

GitClear's 2025 analysis found a large rise in code cloning in the repositories it studied and linked the trend to AI-assisted development.[^gitclear] That report is an industry analysis, not a controlled trial. It should not be used as a universal fact. It does raise a practical question: if a tool can generate many plausible implementations, who notices when the repository now has five versions of the same rule?

The Air Canada case is not a productivity study, but it makes the accountability point clearly. Its chatbot gave a customer incorrect information about bereavement fares. Air Canada argued that the chatbot was a separate entity responsible for its own words. The Civil Resolution Tribunal rejected that argument. The company remained responsible for the information its chatbot gave.[^air-canada]

*AI does save time, especially when the job is bounded and the developer can judge the result. But output speed is not engineering speed. A team can close more tickets and still leave behind code slop: unnecessary complexity, duplicated logic, and parts that nobody understands. Without firm limits, AI can turn a simple solution into a complicated one.*

## The two bad reactions

### The first reaction is fear

Developers and communities see a flood of unreviewed generated pull requests and decide that all AI output is slop. I get it. Maintainers have limited review time. They also need to know where a contribution came from and who can explain it.

The Zig project takes the clearest version of that approach. Its official spaces ban LLM-generated code and prose, as well as LLM use for editing, translation, brainstorming, and finding bugs.[^zig-ai] That bright line removes the problem of proving what a contributor understands, but it also rejects useful assistance with the bad output.

Codeberg takes a platform-level approach. It says it will not use project or user data to train LLMs, and its members voted to change its terms to prohibit "vibe-coded" projects. The proposal does not promise automatic scanning, and says active, maintained projects are unlikely to be affected.[^codeberg-ai] This is not a ban on every use of AI. It is a boundary against projects generated or maintained heavily by models without enough human stewardship.

*But calling every use of AI worthless gives management an easy answer. Ignore experienced developers because they are afraid of change. That is not true. AI can be useful. Linus Torvalds made the same point in a Linux code-review discussion. Dismissing all AI output as slop ignores a tool that can help when people still use judgement.[^torvalds]*

### The other reaction is greed

Large companies say they will need fewer people because the model can write code. They push developers to use AI without teaching them how to prompt, inspect, test, challenge, or reject its output. They measure how much text reaches a pull request, not whether the change solves the problem safely.

That is not training. It is pressure with a subscription attached.

The human cost is not abstract. In [a Romanian-language LinkedIn post by Corina Neagu](https://www.linkedin.com/feed/update/urn:li:activity:7516383239943639040/), she describes an unwritten workplace hierarchy where visibility and perception can outrank performance, decisions happen outside formal meetings, and closeness to power shapes opportunities.[^linkedin] You can translate the post in a browser or with an AI tool. The post is not about AI. It shows why output metrics are a dangerous substitute for management. We tell developers to go faster or be replaced, then refuse to say who will replace them. We stop hiring junior developers because AI appears to cover entry-level work. In a few years, we will have fewer developers who learned the systems, made mistakes under supervision, and grew into senior engineers.

<!-- ![Seven brutal rules of office politics: visibility, perception, decisions, power, proximity, information, and reputation.](/uploads/2026/10/brutal-rules-of-office-politics.png) -->

*That breaks the career ladder. It also breaks the feedback loop that keeps teams honest. A senior developer who cannot explain a system does not become more capable because a model produced another patch.*

## Use AI as a tool, not an exit

AI is not bad. I use it to explore ideas, write a first draft, find a missing test, and turn a vague thought into something I can challenge. It helps me move faster only while I stay responsible for the result.

The rules are simple:

- Give AI bounded tasks with a clear definition of done.
- Keep a human owner for every change and every decision.
- Review generated code for behaviour, security, operations, and maintenance. Do not review only the diff size or whether the tests are green.
- Preserve tests, documentation, and incident knowledge. They are the context that lets people detect a convincing mistake.
- Train people to use the tools and to communicate their uncertainty. A model cannot repair a team that cannot discuss a problem clearly.
- Keep hiring and mentoring. AI can support junior developers, but it cannot replace the experience they need to gain.

We should measure the delayed cost too. Track incidents, rework, time to understand a service, duplicate code, review time, and how often someone asks a model to explain code the team now owns. If AI improves those measures, use more of it. If it makes them worse, change the process.

*I am not afraid of AI getting competent. I am afraid of us getting lazy because an answer appears before we have worked through the question.*

![A person asks what food is; a smiling AI answers, "food goooood".](/uploads/2026/10/ai-answer-without-understanding.png)

---

As a note, this article also began with AI. I am not good with words. The model helped me turn a long frustration into a draft, and I revised it until it said what I meant. That is the relationship I want with these tools. Help me think, then make me responsible for the result.

[^bun]: [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust), Bun Blog. The post discloses Anthropic's acquisition of Bun and reports the cost, workflow, test count, manual monitoring, early stubbing failure, review process, and async-close bug.
[^bun-video]: [The real lessons behind the Bun rewrite](https://www.youtube.com/watch?v=U73TPeCCAMI), Awesome, YouTube. This is commentary on Bun's account, not independent evidence of Anthropic's motives.
[^metr]: [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), METR.
[^gitclear]: [AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones](https://www.gitclear.com/ai_assistant_code_quality_2025_research), GitClear.
[^air-canada]: [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html), Civil Resolution Tribunal of British Columbia.
[^zig-ai]: [Strict No LLM / No AI Policy](https://ziglang.org/code-of-conduct/#strict-no-llm-no-ai-policy), Zig Code of Conduct. The policy applies to Zig's official spaces, including its Codeberg organisation.
[^codeberg-ai]: [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html), Codeberg News. The terms-of-use change was announced as planned policy, not presented as already enforced.
[^torvalds]: [Linus Torvalds on AI code review](https://lore.kernel.org/intel-gfx/CAHk-=wi_drr4Ls9KtXW1k8L2FUDF0YdnyjvKmPgLXHDFnnRWEg@mail.gmail.com/), Linux kernel mailing list.
[^linkedin]: ["Nimeni nu-ți dă, la angajare, manualul nescris"](https://www.linkedin.com/feed/update/urn:li:activity:7516383239943639040/), Corina Neagu, LinkedIn. The post is in Romanian and discusses informal workplace power, visibility, and opportunity.
