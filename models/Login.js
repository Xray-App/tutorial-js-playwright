// models/Login.js
class LoginPage {
    constructor(page) {
      this.page = page;
    }
    
    async navigate() {
      await this.page.goto('https://robotwebdemo.herokuapp.com/');
    }
    
    async login(username, password) {
        await this.page.click('id=username_field');
        await this.page.fill('input[id="username_field"]', username);
        await this.page.fill('input[id="password_field"]', password);
        await this.page.click('id=login_button');
    }

    async getInnerText(){
        return this.page.innerText("p");
    }

  }
  module.exports = { LoginPage };