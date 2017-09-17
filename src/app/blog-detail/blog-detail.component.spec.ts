import { BlogDetailComponent } from './blog-detail.component';
import { Observable } from 'rxjs/Observable';

describe("Blog Detail Component", function () {

    let blogSvc, component, activedRoute;

    beforeEach(function () {

        let obs = Observable.create(o => {
                o.next(1),
                o.next(2)
        });

        blogSvc = jasmine.createSpyObj("blogSvc", {
            getById: jasmine.createSpy("byId").and.returnValue(obs)
        });

        activedRoute = {
            snapshot: { params: { id: 1 } }
        };

        component = new BlogDetailComponent(blogSvc, activedRoute);
    });

    it('onInit it should call getById of blog service', function () {

        component.ngOnInit();

        expect(blogSvc.getById).toHaveBeenCalled();
    });
});