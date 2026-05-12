---
title: "rewriting my todo app for the fourth time"
date: "2026-01-30"
tags: ["cs", "long"]
pinned: false
dek: "the same app, in four different languages, over four years. what each version got wrong. plus screenshots of all four."
readTime: "20 min"
---

version 1 was Python. i was sixteen. it stored tasks in a text file, one per line. there was no delete function — you had to open the file and manually remove the line. i used it for three weeks before switching back to a physical notebook.

version 2 was JavaScript. i was eighteen and had just learned what a REST API was. it had a backend, a database, authentication, user accounts, and a "teams" feature. for a personal todo app. i never finished it. it is still, to my knowledge, running on a $5 droplet somewhere, serving no users.

version 3 was Swift. i was learning iOS development and thought: todo apps are simple, this will be a good learning project. the learning project taught me about Auto Layout constraints, which i still don't fully understand. the app crashed if you added more than twenty tasks. i never added more than nineteen tasks, so i used it for a while.

version 4 is the one i'm writing now. i'm going to tell you what each version got wrong, because understanding the failure mode of each one is the only reason i have any confidence that this one will be different.

## version 1: the file era

**what it got wrong:** no delete. but also, the deeper problem: it was optimized for adding tasks, not for doing them. it was very easy to add "read chapter 7" and very hard to feel any accountability to actually read chapter 7. the notebook worked better because crossing something out felt like something. a line in a text file doesn't feel like anything.

**what i learned:** the UI of a todo app isn't the form field. it's the moment of completion.

## version 2: the api era

**what it got wrong:** everything. a personal todo app does not need teams. a personal todo app does not need accounts. a personal todo app does not need a backend at all. i built it this way because i was excited about the technology, not because the technology served the problem.

there's a version of this failure mode in every project i've done since. the question i've started asking is: *what is the simplest thing that would work?* not as a shortcut, but as a constraint.

**what i learned:** the most important design decision is what to leave out.

## version 3: the native era

**what it got wrong:** it was too beautiful. i spent more time on the task row animation than on the actual task management logic. the animations were good. the task management was fragile.

also: Auto Layout.

**what i learned:** finish the hard parts before you finish the beautiful parts.

## version 4: what i'm trying now

version 4 is called queue. it's a web app, very small. the design is in the sidebar. the premise is: once you add a task, you can't remove it without completing it first. you can defer it, but it stays in the list. you can't archive it into a folder where you never look. it sits there.

this is the part people don't like in user testing (my roommate). he said it "punishes" you for having tasks. i said that was the point. he said that's annoying. i said maybe.

the app has about twelve actual users, which i consider a success. none of them have asked for teams.

---

*screenshots are in my github. the repo is linked in the sidebar. please don't look too hard at the css in version 2.*
