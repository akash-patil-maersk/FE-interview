This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Todo FE Interview

### Introduction

We have a Todo app that has a few errors and poor typescript usage. Feel free to use google and ask your interviewer questions as you would when pair programming. Be vocal about your thought process as the focus of this task is to asses your problem solving not to just fix the code.

First, to get started install the packages:

```bash
npm install
```

and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Issues

- Properly type the return types of our api in `/src/pages/api/todos.ts`
- Remove all any types in `/src/components/TodoList.ts`
- Gracefully handle the different states in `/src/components/TodoList.ts`
- Prevent refresh on add todo

Generally all the relevant code to fix is in the `src/components` folder and the `src/pages/api` folder
