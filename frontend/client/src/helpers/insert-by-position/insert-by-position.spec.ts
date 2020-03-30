import {insertByPosition} from './insert-by-position';
import {EPosition} from '../../constants/shared';

describe('testing fn insertByPosition', () => {
    const testID = 99;

    it('Insert into array by anchor and position ', () => {
        const result = insertByPosition([1, 2, 3], testID, 3, EPosition.BEFORE);
        expect(result).toEqual([1, 2, testID, 3]);
    });

    it('Insert into array at the end if there is no anchor and position', () => {
        const result = insertByPosition([1, 2, 3], testID);
        expect(result).toEqual([1, 2, 3, testID]);
    });
});