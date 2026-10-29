# Dinner Night ticket site (static)

Images are in the images/ folder (pour.jpg is the hero; glasses.jpg and table.jpg are in the gallery). Swap them by keeping the same file names.
Files: index.html (public), success.html (public), admin.html (YOU only), style.css, script.js, config.js
Only edit **config.js** (search for TODO). No build step.

## Flow
Guest taps Pay -> Paystack page with MoMo prompt -> Paystack emails receipt -> redirected to success.html.
Each evening you export the CSV, make ticket images in admin.html, and send them on WhatsApp.

## What YOU need to do
1. **config.js**: event name, date, venue, phone, email, WhatsApp number (233XXXXXXXXX), ticket names and prices.
2. **Paystack**: create an account and start verification TODAY (needs a registered Ghana business + GHS bank account).
3. In Paystack > Payments > Payment Pages, create one page per ticket tier with a fixed amount.
   - Turn on Mobile Money.
   - Add a custom field "WhatsApp number" (required) so you can message the guest.
   - Set the Redirect URL to https://YOUR-SITE/success.html
   - Paste each page link into `payLink` in config.js.
4. **Receipt email**: in the Payment Page description, add date, venue and "your ticket image comes via WhatsApp".
5. **Deploy**: drag this folder onto Netlify Drop (app.netlify.com/drop), or use GitHub Pages / Cloudflare Pages.
   Do not link to admin.html from the public pages. It holds no data, but keep the address to yourself.
6. **Tickets (daily batch)**: Paystack > Transactions > Export CSV. Open YOUR-SITE/admin.html (or open the file on your computer),
   upload the CSV, tap Download image, then Open WhatsApp and attach the image.
   If the tool says it can't find columns, edit the `COLS` list in admin.html to match your CSV headers (TODO).
   The 6-character ticket code comes from the Paystack reference, so you can look it up at the door.
7. **Seat limit**: Paystack can't cap seats on a static page. Watch sales in the dashboard and
   deactivate the Payment Page when you hit capacity.
8. **Door**: keep the exported CSV open on your phone and match name or the 6-character code (last 6 letters/numbers of the reference).
9. **Test** in Paystack test mode first, then do one real small payment before sharing the link.
