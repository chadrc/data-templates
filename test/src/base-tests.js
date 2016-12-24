/**
 * Created by chad on 12/23/16.
 */

describe("Templates", function () {

    describe("Load inline template", function () {
       let template = DataTemplates.getTemplate("testTemplate");
       it(`Template in mocha.html should have been loaded and stored.`, function () {
           expect(template).to.exist;
       });
    });
});