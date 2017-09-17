import { HomeComponent } from './home.component';

describe("Home Component", () => {

    let component;

    beforeEach(function () {
        component = new HomeComponent();
    });

    it('should have myProperty defined', function () {
        expect(component.myProperty).toBe(0);
    });

    it('change value should increment myProperty by 1', function () {

        component.changeValue();

        expect(component.myProperty).toBe(1);
    });
});