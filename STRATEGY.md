# Addis Eats — Rendering Strategy

## 1. Route Rendering Strategy

| Route         | Strategy                       | Reason                                                                           |
| ------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| `/`           | Static                         | The homepage content does not change frequently.                                 |
| `/menu`       | Cached data with revalidation  | Dish data is cached to improve performance.                                      |
| `/menu/[id]`  | Static generation              | Dish pages are generated using `generateStaticParams()`.                         |
| `/cart`       | Client-side                    | Zustand manages interactive cart state and persists it in localStorage.          |
| `/checkout`   | Server page + Client Component | The page renders on the server, while the form handles user input on the client. |
| `/api/dishes` | Route Handler                  | Returns dish data as JSON.                                                       |

## 2. Data Flow

1. Dish data is provided by `getDishes()` in `lib/dishes.ts`.
2. The menu and dish detail pages retrieve dish data on the server.
3. `/api/dishes` exposes the dish data through a GET endpoint.
4. Zustand manages cart items in the browser.
5. The checkout form sends customer information and cart data to a Server Action.
6. The Server Action validates the submitted information before redirecting to the success page.

## 3. Caching

The `getDishes()` function uses the `use cache` directive and `cacheLife("hours")` to cache dish data.

## 4. Error Handling

Loading and error files provide route-level feedback while pages load or when an error occurs.

## 5. Limitations

- Dish data is currently sample data.
- Orders are not saved to a database.
- Authentication and payment processing are not implemented.
