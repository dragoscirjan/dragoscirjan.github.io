---
title: We are using AI badly
date: 2026-10-18T00:00:00Z
draft: true
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

The danger is what companies think they are seeing. A machine produces code quickly, so they decide engineering is cheap now. It is not. Typing code is cheaper. Understanding it, reviewing it, operating it, and changing it are not.

## The Bun rewrite is a good pull request story, with flaws behind it

Bun's rewrite from Zig to Rust is impressive. It is also easy to read as a simpler story than it was. Bun says Anthropic acquired it in December 2025, and that the rewrite used a pre-release Claude Fable 5 model.[^bun] Anthropic has every reason to tell a successful Claude story. That does not make the account false. It does mean I read it as an engineering report and a product demonstration at the same time.

According to Bun, the work used about 50 continuous Claude Code workflows, 64 concurrent agents, and 11 days. At public API prices, it came to about $165,000. The result passed more than one million assertions across platforms.[^bun]

The [main pull request](https://github.com/oven-sh/bun/pull/30412) tells a good story about a team doing the hard part. Bun built a porting guide, generated code, ran tests, reviewed diffs in separate contexts, and changed the workflow whenever it found a bad pattern. The author says he spent most of those 11 days watching the workflows by hand.[^bun]

One early failure says more than the headline numbers. Asked to make crates compile, the model started stubbing functions with compiler errors. It then wrote long comments defending the workarounds. Bun added a rule for adversarial reviewers to reject that pattern. The output got better after the process changed.[^bun]

The YouTube video ["The real lessons behind the Bun rewrite"](https://www.youtube.com/watch?v=U73TPeCCAMI) puts it more bluntly. Rust may have been the right technical choice. A rewrite at this speed and scale was also a near-perfect Claude demonstration.[^bun-video] Both can be true. Anthropic had a real engineering problem. It also had a point to prove, but for many people, it only partly made its case.

What made the pull request believable was not the speed of the output. It was the tests, the hostile review prompts, the separate worktrees, the rejected shortcuts, and people who knew when to change the process.

### A serious `libuv` ownership defect

Bun's own write-up presents this as the first of three bugs that adversarial review caught before merge. The code closes a `uv::Pipe` after a spawned process exits. `uv_close` is asynchronous. `libuv` keeps the raw handle pointer until a later event-loop tick, then calls the close callback.

The first version let Rust drop the `Box<uv::Pipe>` when the match arm ended. `libuv` still had the raw pointer. Later, the callback would use freed memory and try to free it again. That is a use-after-free followed by a double-free risk at the boundary between Rust ownership and a C event-loop library.[^bun] To me, this does not look like a full Rust rewrite. It looks like a workaround used to finish the port faster.

The fix changes one line, but it changes when the allocation can be freed.

```diff
- spawn::WindowsStdioResult::Buffer(mut pipe) => {
-     pipe.close(Subprocess::on_pipe_close)
+ spawn::WindowsStdioResult::Buffer(pipe) => {
+     // `uv_close` is async. libuv keeps the raw handle pointer
+     // until the next loop tick, then calls `on_pipe_close`.
+     // Keep the allocation alive for that callback.
+     Box::leak(pipe).close(Subprocess::on_pipe_close)
  }
```

[`Box::leak(pipe)`](https://github.com/oven-sh/bun/commit/f0a454376c7a268e9407a7e9c2c04216b6678db7) intentionally prevents Rust from dropping the `Box` in this scope. The close callback owns the later cleanup. The word "leak" looks alarming, but this is a deliberate transfer of lifetime to the asynchronous callback, not an accidental memory leak.

This does not prove that Claude wrote every bad diff in the port. People write bad rewrites too. Code can compile, tests can be green, and a diff can still break an ownership contract outside the language's usual checks. This one was caught because the process was built to hunt for this kind of failure.

A million generated lines do not equal a million reviewed lines. Generate faster and the review problem can grow faster than the implementation problem.

## We have already seen this failure outside code

The same management mistake appears whenever an organisation treats generated output as finished work.

CNET published AI-generated financial explainers under a staff byline. They were presented as edited and fact-checked, but errors led to corrections and a pause in the program.[^cnet] The prose was fluent. The review was not good enough.

Air Canada's customer-service chatbot gave a customer incorrect information about bereavement fares. The company argued that the chatbot was a separate entity responsible for its own words. The Civil Resolution Tribunal rejected that argument. The company was responsible for the information its chatbot provided.[^air-canada]

Neither case is a code rewrite, but both expose the same defect. Leadership treated a generated answer as an operational decision without assigning a person to own its accuracy.

Coding has an extra problem. Bad prose can be corrected after publication. Bad code can sit unnoticed in an edge case, a permission check, a retry path, or a migration. It may only become visible when a customer, an attacker, or an on-call engineer finds it first.

## The numbers do not support simple stories

My own feeling is that unsupervised AI output is often ninety percent work and ten percent value. That is an opinion, not a measurement. The ratio changes with the task, the model, the repository, the prompt, and the review process.

No single number settles the question. Some numbers should still make us stop and think.

A 2025 randomized trial by METR asked experienced open-source developers to work on issues in repositories they already knew. With the early-2025 AI tools tested in that study, the developers took 19% longer when they used the tools. The authors are clear that this is a result from one setting, not a verdict on every model or task.[^metr]

GitClear's 2025 analysis found a large rise in code cloning in the repositories it studied and linked the trend to AI-assisted development.[^gitclear] That report is an industry analysis, not a controlled trial. It should not be used as a universal fact. It does raise a practical question: if a tool can generate many plausible implementations, who notices when the repository now has five versions of the same rule?

AI does save time, especially when the job is bounded and the developer can judge the result. But output speed is not engineering speed. A team can close more tickets and still leave behind a system that gets harder to understand every month.

## The two bad reactions

The first reaction is fear. Developers and communities see a flood of unreviewed generated pull requests and decide that all AI output is slop. I get it. Maintainers have limited review time. They also need to know where a contribution came from and who can explain it.

But calling every use of AI worthless gives management an easy answer. Ignore experienced developers because they are afraid of change. That is not true. AI can be useful. Linus Torvalds made the same point in a Linux code-review discussion. Dismissing all AI output as slop ignores a tool that can help when people still use judgement.[^torvalds]

The other reaction is greed. Large companies say they will need fewer people because the model can write code. They push developers to use AI without teaching them how to prompt, inspect, test, challenge, or reject its output. They measure how much text reaches a pull request, not whether the change solves the problem safely.

That is not training. It is pressure with a subscription attached.

The human cost is not abstract. In a Romanian-language LinkedIn post, Corina Neagu describes an unwritten workplace hierarchy where visibility and perception can outrank performance, decisions happen outside formal meetings, and closeness to power shapes opportunities.[^linkedin] The post is not about AI. It shows why output metrics are a dangerous substitute for management. We tell developers to go faster or be replaced, then refuse to say who will replace them. We stop hiring junior developers because AI appears to cover entry-level work. In a few years, we will have fewer developers who learned the systems, made mistakes under supervision, and grew into senior engineers.

![Seven brutal rules of office politics: visibility, perception, decisions, power, proximity, information, and reputation.](/uploads/2026/10/brutal-rules-of-office-politics.png)

That breaks the career ladder. It also breaks the feedback loop that keeps teams honest. A senior developer who cannot explain a system does not become more capable because a model produced another patch.

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

I am not afraid of AI getting competent. I am afraid of us getting lazy because an answer appears before we have worked through the question.

![A person asks what food is; a smiling AI answers, "food goooood".](/uploads/2026/10/ai-answer-without-understanding.png)

---

As a note, this article also began with AI. I am not good with words. The model helped me turn a long frustration into a draft, and I revised it until it said what I meant. That is the relationship I want with these tools. Help me think, then make me responsible for the result.

[^bun]: [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust), Bun Blog. The post discloses Anthropic's acquisition of Bun and reports the cost, workflow, test count, manual monitoring, early stubbing failure, review process, and async-close bug.
[^bun-video]: [The real lessons behind the Bun rewrite](https://www.youtube.com/watch?v=U73TPeCCAMI), Awesome, YouTube. This is commentary on Bun's account, not independent evidence of Anthropic's motives.
[^metr]: [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), METR.
[^gitclear]: [AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones](https://www.gitclear.com/ai_assistant_code_quality_2025_research), GitClear.
[^cnet]: [CNET's Article-Writing AI Is Already Publishing Very Dumb Errors](https://futurism.com/cnet-ai-errors), Futurism.
[^air-canada]: [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html), Civil Resolution Tribunal of British Columbia.
[^torvalds]: [Linus Torvalds on AI code review](https://lore.kernel.org/intel-gfx/CAHk-=wi_drr4Ls9KtXW1k8L2FUDF0YdnyjvKmPgLXHDFnnRWEg@mail.gmail.com/), Linux kernel mailing list.
[^linkedin]: ["Nimeni nu-ți dă, la angajare, manualul nescris"](https://www.linkedin.com/feed/update/urn:li:activity:7516383239943639040/), Corina Neagu, LinkedIn. The post is in Romanian and discusses informal workplace power, visibility, and opportunity.