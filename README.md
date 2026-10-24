# Aag Bagoola

A lightweight, responsive cafe site built with plain HTML, CSS and JavaScript. No build step or dependencies are required.

## Run locally

Open `index.html` in a browser, or serve the project folder with any static web server. For example, `npx serve .` (requires Node.js).

## Update business details and WhatsApp

Edit `config/site.js`. Set `WHATSAPP_NUMBER` to the business WhatsApp number in international format using digits only, with no `+` or spaces (for example, `92...`). Replace the phone, map links and Instagram URL there as needed. The address, price range and daily opening hours are configured there too. The number must be a real number before orders can be sent.

The grouped “What we offer” cards are editable in the typed JSDoc `whatWeOffer` array in `config/site.js`. Cart customer details are saved in the browser for returning customers; the cart itself is cleared after a WhatsApp order is launched.

## Edit the menu

The product list, IDs, descriptions, categories and numeric PKR prices are in the `products` array near the top of the script in `index.html`. Keep each ID unique. Prices are numeric and are formatted as `PKR 350.00` in product cards, the cart and the WhatsApp order.

## Photography

The hero and Instagram-style gallery use remote Unsplash images. Replace those URLs with locally hosted cafe photos when available. Good shots to commission:

1. Caramel tea pouring in a thin, glowing ribbon.
2. Steam rising from a close-up cup of karak chai.
3. Glossy boba pearls with warm amber backlight.
4. Passion-fruit iced tea with popping boba and condensation.
5. Peach and green-apple iced teas side by side.
6. A chocolate boba drink with a visible straw and pearl texture.
7. An iced mocha being poured over espresso and milk.
8. A strawberry shake with fresh strawberry detail.
9. A brownie shake with brownie pieces and a dark backdrop.
10. A wide, candid view of the real cafe ambience and welcoming staff.

## Deploy to Netlify

This is a static HTML site, not a Next.js app. Netlify should use the project root (`.`) as the publish directory and needs no build command. `netlify.toml` routes `/images/*` requests to the image files inside `public/images/`.

## Deploy to Vercel

Import the project into Vercel as a static site. No framework preset or build command is needed; set the output directory to the project root. Confirm all `[REPLACE]` values and image links before making the site public.
