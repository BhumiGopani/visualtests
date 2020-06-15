import { Selector, t } from "testcafe";
import * as percySnapshot from "@percy/testcafe";
import * as chance from "chance";

const hotelLogo = Selector(".hotel-logoUrl");
const name = Selector("#name");
const email = Selector("#email");
const phone = Selector("#phone");
const email_subject = Selector("#subject");
const message = Selector("#description");
const next = Selector("#next");
const close = Selector("#closeModal");
const submit = Selector("#submitContact");

fixture`Getting Started`.page`https://automationintesting.online/#/`;

test("Home page verification", async (t) => {
  await t.click(next).click(next).click(next).click(next).click(close);
  await t.expect(hotelLogo.exists).ok();
  await percySnapshot(t, "Home Page verification screenshot", {
    percyCSS: `.map { display: none; }`,
  });
  console.log("Screenshot of hotel logo and home page");
});

test("My first successfull booking query", async (t) => {
  await t.click(next).click(next).click(next).click(next).click(close);
  await t.expect(hotelLogo.exists).ok();
  await t
    .typeText(name, "PersonA")
    .typeText(email, "test@gmail.com")
    .typeText(phone, "012345678901234")
    .typeText(email_subject, "test_subject")
    .typeText(message, "Give me a nice view!!!")
    .click(submit);
  await t
    .expect(Selector("h2").withText("Thanks for getting in touch").exists)
    .ok();
  console.log("Test Completed");
  await percySnapshot(t, "Successfull Booking", {
    percyCSS: `.map { display: none; }`,
  });
  console.log("Final booking message compared");
});

test("Error verification", async (t) => {
  await t.click(next).click(next).click(next).click(next).click(close);
  await t.expect(hotelLogo.exists).ok();

  await t
    .typeText(name, "PersonA")
    .typeText(email, "test@gmail.com")
    .typeText(phone, Math.floor((Math.random() * 100) + 1).toString())
    .typeText(email_subject, "test_subject")
    .typeText(message, "Give me a nice view!!!")
    .click(submit);
  await t.expect(Selector(".alert.alert-danger").exists).ok();
  console.log("Test Completed");
  await percySnapshot(t, "Error in Booking", {
    percyCSS: `.map, .alert.alert-danger, #phone { display: none; }`
  });
  console.log("Error verification");
});
