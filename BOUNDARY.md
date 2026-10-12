# Addis Eats — Server and Client Boundaries

## Server Components

Server Components handle pages and data retrieval.

- `app/page.tsx`
- `app/menu/page.tsx`
- `app/menu/[id]/page.tsx`
- `app/checkout/page.tsx`

## Client Components

Client Components handle browser interactions and interactive state.

- `app/menu/[id]/AddToCartButton.tsx`
- `app/cart/page.tsx`
- `app/checkout/checkoutform.tsx`

## Server Action

`app/checkout/actions.ts` validates checkout form data on the server and handles the checkout redirect.

## Route Handler

`app/api/dishes/route.ts` provides a GET endpoint that returns dish data as JSON.

## Design Principle

Keep data retrieval and validation on the server. Use Client Components only where browser interaction or client-side state is required.
