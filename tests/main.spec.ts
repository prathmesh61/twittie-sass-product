import { test, expect } from "@playwright/test";

const WEB_URL = "http://localhost:3000/";

test("Navbar", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto(WEB_URL);
  //  Click the get started link.
  await expect(page.getByText("Twittie")).toBeVisible();
  await page.getByRole("link", { name: "Features" }).click();
  await page.getByRole("link", { name: "Pricing" }).click();
  await page.getByRole("link", { name: "Faq" }).click();

  await page.click("text=Try for Free!");
});

test("Hero section", async ({ page }) => {
  await page.goto(WEB_URL);

  // Hero section

  await expect(
    page.getByText("Turn Twitter into a sales machine with our CRM")
  ).toBeVisible();
  await expect(page.getByRole("img", { name: "HeroImg" })).toBeVisible();
  await page.click("text=Try for Free!");
  await page.click("text=Login");
  // getByRole('img', { name: 'HeroImg' })
  // check review component

  await expect(
    page.getByText("Join over 5644+ Twitter pros including")
  ).toBeVisible();
});

test("Feature section - 1", async ({ page }) => {
  await page.goto(WEB_URL);

  // feature -1
  await expect(page.getByText("How we help you grow on Twitter")).toBeVisible();
  await expect(
    page.getByText(
      "Give your brain endless inspiration: our advanced AI for automated content generation."
    )
  ).toBeVisible();
});
test("Spotlight component", async ({ page }) => {
  await page.goto(WEB_URL);

  // Spotlight
  await expect(
    page.getByText("Boost your tweets’ reach and results with automation")
  ).toBeVisible();
  await expect(page.getByText("3M+ Viral Tweets Library")).toBeVisible();
  await expect(page.getByText("AI-powered Writing")).toBeVisible();
  await expect(page.getByText("4K+ staff-picked tweets")).toBeVisible();
});
test("Feature section -2", async ({ page }) => {
  await page.goto(WEB_URL);

  // Feature -2
  await expect(page.getByText("Get more sales, clients")).toBeVisible();
  await expect(
    page.getByText(" building relationships that lead to more opportunities")
  ).toBeVisible();
});
test("Testimonial section ", async ({ page }) => {
  await page.goto(WEB_URL);

  // Testimonial
  await expect(
    page.getByText("What 1534+ Tweet Hunter users are saying")
  ).toBeVisible();
});
test("CTA section", async ({ page }) => {
  await page.goto(WEB_URL);

  // CTA
  await expect(
    page.getByText("Save time and get REAL results on social media.")
  ).toBeVisible();
  await expect(
    page.getByText("Get Twitter Growth & Monetization Book")
  ).toBeVisible();
  await page.locator("[name=email]").fill("1@1.com");
  await page.click("text=subscribe");
});
test("Footer", async ({ page }) => {
  await page.goto(WEB_URL);

  // CTA
  await expect(
    page.getByText("© 2023 Pratham Inc. All Rights Reserved.")
  ).toBeVisible();
  await expect(page.getByText("Terms of Use | Privacy Policy")).toBeVisible();
});
