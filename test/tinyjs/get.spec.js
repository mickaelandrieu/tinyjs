define(['tinyjs/tinyjs'], function(TinyClass) {
    'use strict';

    describe('tinyjs get tests()', function() {
        it('Select an element through an id.', function() {
            expect(TinyClass.get('#paragraph')).toBe('DOMElement');
        });

        it('Select an element through a class.', function() {
            expect(TinyClass.get('.list')).toBe('DOMElement');
        });
    });
});
function setUpHTMLFixture() {
    jasmine.getFixtures()
        .set('<html>\
              <head></head>\
              <body>\
              <div id="divider">Hello world</div>\
              <ul class="list"><li></li><li></li></ul>\
              </body>\
              </html>\
            ')
    ;
}
