import { BlogService } from './blog.service';

describe("Blogs Service", function () {

    let blogSvc, http;

    beforeEach(function () {
        //Arrange
        http = jasmine.createSpyObj('http', {
            get: jasmine.createSpy("get"),
            post:jasmine.createSpy("post"),
        });

        blogSvc = new BlogService(http);
    });

    describe("Get call", function () {

        it('should call get method of http service', function () {

            //Act
            blogSvc.get(0, 10);

            //Assert
            expect(http.get).toHaveBeenCalledWith('http://api-express2.azurewebsites.net/blogs/0/10');
        });
    });

    describe("Save", function () {

        it('should call post method of http service', function () {
            blogSvc.save({});

            expect(http.post).toHaveBeenCalled();
        })
    });
});