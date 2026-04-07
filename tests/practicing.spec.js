import {test} from "@playwright/test"
test("practicing",async({page})=>{

await page.goto("https://www.amazon.com/")
const searchBox = page.getByRole("searchbox", { name: "Search Amazon" });
await searchBox.fill("one plus mobile");

// Wait for the suggestion dropdown and select the suggestion containing 'one plus mobile'
const suggestion = page.locator('div[aria-label="Search suggestions"] div[role="button"]:has-text("one plus mobile")').last()
await suggestion.first().waitFor({ state: 'visible', timeout: 10000 });
await suggestion.first().click();

// Optionally, wait for results to load and verify
await page.waitForSelector('span.a-size-medium');

})