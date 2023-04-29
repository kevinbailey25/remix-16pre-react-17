# Instructions

Install Dependencies

```
npm install
```

Run the project

```
npm run dev
```

Navigate to the root 

```
http://localhost:3000
```

Open up your dev tools for Google Chrome to observe the console

Click the "Click me to do a client side navigate to Test"

Notice that the `test` route tries to render like ~3 times, fails the first 2 because `useLoaderData` is returning undefined.

Eventually by the 3rd render the page will work. Doing a hard refresh is fine because it's SSR. 

At first this seems fine but I'd found that is causes lots of weird side effects with fully applications. 