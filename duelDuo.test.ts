
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// test('draw button displays choices', async() => {
//     const button = await driver.findElement(By.id('draw'))
//     const displayed1 = await button.isSelected()
//     expect (displayed1).toEqual(true)

// })

// test('add to duo', async () => {
//     const button1 = await driver.findElement(By.id('player-duo'))
//     const displayed2 = await button1.isSelected()
//     expect(displayed2).toBe(true)
// })


