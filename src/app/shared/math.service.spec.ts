import { MathService } from './math.service';

describe("Math Service", function () {

    let svc;

    beforeEach(function () {
        //Arrange
        svc = new MathService();
    });


    it('should add two numbers and return result', function () {
        //Act
        let c = svc.add(2, 3);

        //Assert
        expect(c).toBe(5);
    });


    it('should return 0 when first parameter is zero', () => {
        var c = svc.add(0, 5);

        expect(c).toBe(0);
    });

    afterEach(function () {
        svc = undefined;
    });

});