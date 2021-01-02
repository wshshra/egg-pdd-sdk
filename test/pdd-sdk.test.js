'use strict';

const mock = require('egg-mock');

describe('test/pdd-sdk.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/pdd-sdk-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, pddSdk')
      .expect(200);
  });
});
