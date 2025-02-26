// @ts-check
import { test, expect } from '@playwright/test'

test('app shows random fact and image', async ({ page }) => {
  const LOCAL_HOST_URL = 'http://localhost:5173'
  const PREFIX_IMAGE_URL = 'https://cataas.com'
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(PREFIX_IMAGE_URL)).toBeTruthy()
})
