describe("Login Page", () => {
  it("Successful Login", () => {
    browser.url("http://localhost:3000/login");
    const username = $(`[name="email"]`);
    const password = $(`[name="password"]`);
    const submit = $(`[type="submit"]`);
    const welcomeMessage = $('//*[@id="root"]/section/h1');
    username.setValue("derek@browserstack.com");
    password.setValue("Password1");
    submit.click();
    expect(welcomeMessage).toHaveValue("Dashboard");
  });
});
