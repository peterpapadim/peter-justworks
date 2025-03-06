[Peter Papadimitropoulos](https://www.codepeter.com) <br>
[Justworks - Software Engineer, Marketing Website](https://boards.greenhouse.io/justworks/jobs/6407460?gh_jid=6407460)<br>
Coding Exercise - March 2025<br><br>

# [CoinCalc](https://peter-justworks.vercel.app/)

CoinCalc is a handy tool that helps you divvy up a USD amount across up to 5 assets. Just enter your allocations, and CoinCalc will quickly let you know how much of each asset you can buy.

Try it out here: https://peter-justworks.vercel.app/

## Architecture

- **Framework**: Vite + Vue 3 (SFC & Composition API)
- **Language**: TypeScript
- **API**: Coinbase API
- **Deployment**: Vercel

## How It Works

### Overview

CoinCalc is designed to be fast, easy, and reliable. Everything happens on the frontend to make things snappy, user-friendly, and interactive.

### How the Magic Happens

1. **User Inputs**:
   - Enter the USD amount and choose your allocations.
   - Pick at least 2 and up to 5 currencies.
   - We keep track of your inputs, including the dollar amount, selected currencies, and how much you want to allocate to each one.

2. **Form Submission**:
   - When you hit submit, we check your inputs to make sure everything's good to go.
   - We use the Coinbase API to get the latest data and process your inputs.
   - We handle errors like:
     - Not selecting at least 2 currencies.
     - Allocations not adding up to 100%.
     - Selecting a currency without setting an allocation.

3. **Showing Results**:
   - We calculate how much of each asset you can buy based on your allocations.
   - The results are displayed clearly so you can see exactly what you can purchase.

## Key Considerations

### SEO

- Use semantic markup.
- SEO meta data in index.html (title, description, etc).

### Performance

- Avoid overfetching data.
- Prevent side effects.
- Minimize unnecessary rerendering.
- Support proper error handling.

### Accessibility

- Use accessible font sizes, colors, and proper contrasting.
- Use native elements.
- Keep proper nesting of elements.
- Ensure correct labeling.

### Reusability

- Develop reusable components.
- Don't hard-code styles like padding and margins into reusable components.
- Move fetch requests to a service layer to promote reusability and create a single source of truth.
- Create utility functions for reusable business logic.

## Tools for Optimization

Use Lighthouse and Chrome Web Vitals extension to keep an eye on and improve Google Core Vitals, Performance, Accessibility, Best Practices, and SEO.

## Future Plans

- Explore a Vue Full Stack Framework such as Nuxt that supports SSR and SSG for further optimization opprotunities. 
