---
title: "the 4am bug that wasn't a bug"
date: "2026-03-14"
tags: ["ramblings", "cs"]
pinned: true
dek: "sometimes the bug is in your head. a small story about spending six hours on the wrong line of code and what it taught me about asking for help — eventually."
readTime: "12 min"
---

it started around 10pm.

i had a segfault in a small C program — a parser i was writing for the compilers assignment. the error message was vague, as they always are. `Segmentation fault (core dumped)`. thanks. very helpful.

i opened gdb. i checked the stack trace. the crash was happening in a function called `advance_token`, somewhere around line 94. i looked at line 94. nothing seemed wrong. i looked at lines 90 through 100. still nothing. i reread the whole function. i commented out sections. i added print statements. i rebuilt each time.

nothing changed. the crash kept happening. exact same line.

## the part where i convinced myself it was a compiler bug

at around midnight, i started googling things like "gcc bug segfault false positive" and "clang miscompiles pointer arithmetic." this is, in retrospect, the first sign you've gone off the rails. the compiler is almost never wrong. but when you're three hours in and can't find the issue, the compiler starts to look very suspicious.

i switched from gcc to clang. same crash. i downgraded to an older version of the standard library. same crash. i rewrote `advance_token` from scratch in a separate file to make sure it wasn't some subtle undefined behavior i was introducing through the larger codebase.

same crash.

## the spiral

by 2am i had:
- rewritten the function twice
- switched compilers
- reformatted my hard drive (okay, not quite — but i thought about it)
- opened five stack overflow tabs that weren't related to my problem
- eaten an entire bag of pretzels without noticing

the stack trace still said line 94. i had memorized line 94. line 94 was `token = tokens[pos];`. this is a single array access. this cannot segfault unless `tokens` is null or `pos` is out of bounds.

i had checked that `tokens` was not null. multiple times.

i had not checked that `pos` was not out of bounds.

## the bug

it was `pos`. of course it was `pos`.

there was a function three call frames up that was supposed to stop incrementing `pos` when it reached the end of the token stream. it didn't. it kept going. so by the time `advance_token` ran, `pos` was 47 and the array had 46 elements.

i had written that function myself, two weeks before, and then completely forgot it existed. i assumed the problem had to be in the code i'd just written. the thing i was staring at. the six lines i could see on my screen.

the bug was elsewhere — in the context. in the thing that called the thing that called the thing.

## what this is actually about

i didn't figure it out myself. at 3:58am i sent a message to a friend — another cs student who was, apparently, also still awake. i described the problem. badly. i was exhausted and my description was incoherent.

he asked one question: "what's calling `advance_token`?"

i opened the call stack again. really looked at it. and then i saw it.

the fix was one line. a bounds check. `if (pos >= token_count) return;`. the whole thing took forty seconds once i knew where to look.

six hours. one bounds check. one question from a friend who wasn't even looking at my code.

## the lesson i actually took from this

the obvious lesson is: check your assumptions. don't assume the bug is in the last thing you touched. read the whole call stack. don't blame the compiler.

but the real lesson, the one i think about more, is this: i waited until 4am to ask for help. i spent six hours cycling through increasingly unhinged theories about compiler bugs and pointer arithmetic, when the fix was one question away the entire time.

i didn't ask because i wanted to solve it myself. i wanted to be the person who figured it out. i wanted the clean narrative — stayed up late, found the bug, shipped the thing. asking for help felt like admitting i wasn't that person.

it's a bad reason. it cost me six hours of sleep and an entire bag of pretzels.

i ask faster now. it's better.

---

*the compilers assignment, by the way, got a 94. the grader left a note: "nice parser." i don't think they knew about the 4am.*
