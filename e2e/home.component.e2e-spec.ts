import { browser, element, by } from 'protractor';

describe("Home e2e", function () {

    browser.get('');

    it('should have title', function () {
        expect(browser.getTitle()).toBe('Blogs.Ui');
    });

    it('should have heading on home page', function () {

        let elem = element(by.css("h1"));

        expect(elem.getText()).toBe("Home Compnent");
    });

    it('should navigate to blogs page', function () {

        let blogsLink = element(by.css('a[routerlink="/blogs"]'));

        blogsLink.click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:49152/blogs');
    });

    it('should navigate to new blog page', function () {

        let button = element(by.css(".btn.btn-success"));
        button.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:49152/blogs/new');

        let saveButton = element(by.css(".btn.btn-danger"));
        expect(saveButton.isEnabled()).toBe(false);
    });

    it('should enable the button when validation passes', function () {

        let txtTitle = element(by.css('input[name="title"]'));
        let txtContent = element(by.css('textarea[name="content"]'));

        txtTitle.sendKeys("New Blog");
        txtContent.sendKeys("This is content for my blog");


        let saveButton = element(by.css(".btn.btn-danger"));
        expect(saveButton.isEnabled()).toBe(true);
    });




});