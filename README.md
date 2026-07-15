# Alexandria Real Estate — Website

Premium multi-page website for Alexandria Real Estate (Dubai, RERA #69664).

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, lead form, listings preview, services, process, ROI calculator, testimonials |
| `properties.html` | Full inventory with filters + featured detail panel + gallery |
| `services.html` | Six service detail sections |
| `about.html` | Story, credentials, principles |
| `agents.html` | Advisory team cards + WhatsApp |
| `faq.html` | Expandable investor FAQ |
| `contact.html` | Contact form, details, WhatsApp |

## Features

- EN / AR bilingual with RTL (header + mobile toggle)
- WhatsApp conversion: **+971 58 104 8601**
- Shared design system (`css/styles.css`, `js/app.js`)
- Forms hand off to WhatsApp with lead details
- Property filters and enquire buttons
- Mobile sticky CTA + floating WhatsApp

## Preview

Open any HTML file in a browser. For best results use a local server:

```bash
cd alexandria-re
python3 -m http.server 8080
```

Then visit `http://localhost:8080`

## Notes

- Arena in-app preview may block WhatsApp external links (sandbox). Use a normal browser for full testing.
- Images are embedded as base64 for portable single-file preview of each page.
- For production hosting, switch image `src` values to `assets/img/*.jpg` and link external CSS/JS for caching.
