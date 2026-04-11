import os
from playwright.sync_api import sync_playwright

BASE = r"D:\Claude\Project\Website-tools"
HTML = f"file:///{BASE.replace(os.sep, '/')}/index.html"
OUT = os.path.join(BASE, "screenshots")
os.makedirs(OUT, exist_ok=True)

pages_config = [
    ("about", "About Me", "switchPage('about', document.querySelector('[data-page=\"about\"]'))"),
    ("tools", "Online Tools", "switchPage('tools', document.querySelector('[data-page=\"tools\"]'))"),
    ("ai", "AI Navigation", "switchPage('ai', document.querySelector('[data-page=\"ai\"]'))"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()

    for theme, theme_label in [("dark", "Dark"), ("light", "Light")]:
        for page_id, page_name, js_cmd in pages_config:
            page = browser.new_page(viewport={"width": 1440, "height": 900})
            page.goto(HTML)
            page.wait_for_timeout(1000)

            # Set theme
            if theme == "light":
                page.evaluate("document.documentElement.setAttribute('data-theme', 'light')")
                page.wait_for_timeout(300)

            # Switch page
            page.evaluate(js_cmd)
            page.wait_for_timeout(800)

            # Full page screenshot
            filename = f"{page_id}_{theme}.png"
            filepath = os.path.join(OUT, filename)
            page.screenshot(path=filepath, full_page=True)
            print(f"Saved: {filename}")
            page.close()

    browser.close()

print(f"\nAll screenshots saved to: {OUT}")
