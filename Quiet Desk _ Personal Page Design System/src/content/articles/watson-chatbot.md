---
title: "the chatbot i built when i could not breathe"
date: "2026-05-14"
tags: ["cs", "ramblings"]
pinned: false
dek: "in 2019, while covid had me stuck in bed and scared, i built a small AI chatbot with IBM Watson because making something felt easier than waiting."
readTime: "7 min"
---

in 2019, when covid had me stuck in bed and doing the kind of breathing where you notice every breath, i built an AI chatbot.

this was not the cinematic version of being sick. there was no meaningful montage. mostly there was a room, a fever, too much time, and the strange feeling that my body had become a project i did not know how to debug.

so i made another project.

it used IBM Watson. i do not remember every detail of the setup now, but i remember the feeling of it: intents, examples, responses, a little web page where i could type something and the machine would answer back with whatever fragile logic i had given it. it was not Gemini. it was not ChatGPT. it was not even close. but at the time, watching a sentence go in and a sentence come back felt like a small miracle.

## what it actually did

the chatbot was simple. embarrassingly simple, probably.

you could greet it. you could ask it a few prepared questions. it had little branches for common inputs, the way old chatbots do, where the intelligence is mostly you trying to predict what a person might type. if you asked something outside the script, it would politely fall apart.

i loved it anyway.

part of that was because IBM Watson made AI feel like something i could touch. not a research paper. not a math wall. a thing with buttons and fields and a deploy flow. i could open a dashboard, write training phrases, test them, break them, fix them, and pretend i was doing something normal.

normal mattered a lot that week.

## being sick makes time weird

when you are that sick, time stops behaving. an afternoon can feel like twelve hours. a night can disappear completely. you measure progress in tiny things: fever down a little, water finished, message replied to, one more hour passed.

building the chatbot gave the day edges.

there was before i added an intent and after i added it. before the fallback response worked and after it worked. before the bot misunderstood me and after i taught it one more way to understand.

it was not productive in the noble sense. it did not matter to anyone else. no one needed this chatbot. no company was waiting for it. no user was refreshing a page.

but i needed the feeling of making a thing answer back.

## the first version of a pattern

i think about that project more than i expected to.

not because it was good. it probably was not. if i found the code now, i would probably wince at the structure, the naming, the way i handled state, the way every answer sounded like it had been written by someone trying too hard to sound helpful.

but the shape of it stayed with me.

a small interface. a text box. a problem. a machine on the other side trying, imperfectly, to help. that pattern has followed me into almost everything i build now. cli tools, little agents, scripts that fix boring problems, projects that feel like they are mostly conversation wrapped around code.

maybe that started there: sick, scared, half-awake, teaching Watson how to reply.

## what i would build now

if i built it today, i would make it less polished and more honest.

i would not try to make it sound human. i would make it useful. i would give it a narrow job and a clear way to fail. i would make the fallback response better than the happy path, because most real software lives in the fallback response.

i would also keep one thing exactly the same: the little loop where you type, wait, and something comes back.

that loop still gets me.

there is a kind of hope in it, even when the answer is wrong. especially when the answer is wrong. it means the system is alive enough to argue with.

## after

i got better.

the chatbot stayed small. i moved on to other projects, harder classes, messier code, better tools. Watson became one name in a long list of things i tried while trying to become the kind of person who can make useful software.

but i still remember being in that room, refreshing the test panel, making tiny changes while the fever moved through me.

it was not a great chatbot.

it was proof that i could still make something.
