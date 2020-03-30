import {EPosition} from '../../constants/shared';
import {insertByPosition} from './index';

describe('testing fn insertByPosition', () => {
    const testID = 99;

    it('testing inserting into an array by anchor and position (BEFORE)', () => {
        const result = insertByPosition([1, 2, 3], testID, 3, EPosition.BEFORE);
        expect(result).toEqual([1, 2, testID, 3]);
    });

    it('testing inserting into an array by anchor and position (AFTER)', () => {
        const result = insertByPosition([1, 2, 3], testID, 2, EPosition.AFTER);
        expect(result).toEqual([1, 2, testID, 3]);
    });

    it('testing inserting into an array at the end if there is no anchor and position', () => {
        const result = insertByPosition([1, 2, 3], testID);
        expect(result).toEqual([1, 2, 3, testID]);
    });

    it('testing inserting into an array by anchor but without position', () => {
        const result = insertByPosition([1, 2, 3], testID, 3);
        expect(result).toEqual([1, 2, 3, testID]);
    });

    it('testing inserting into an array without an anchor but with a position', () => {
        const result = insertByPosition([1, 2, 3], testID, undefined, EPosition.AFTER);
        expect(result).toEqual([1, 2, 3, testID]);
    });
});