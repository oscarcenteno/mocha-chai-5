import {expect} from 'chai';
import * as main from '../src/main';
describe('main', () => {
  it('should export things', () => {
      expect(main.a).to.equal(5);
          expect(main.b).to.equal(6);
              expect(main.c()).to.equal(7);
                });
                });