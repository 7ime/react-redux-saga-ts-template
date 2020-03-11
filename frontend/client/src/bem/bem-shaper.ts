import {EBemClassNames} from './bem-class-names';

export default class BemShaper {
    constructor(private blockName: EBemClassNames) {
    }

    get block() {
        return this.blockName;
    }

    elem(elem: string, mod?: string) {
        return this.blockName + '__' + elem + (mod ? '_' + mod : '');
    }

    mod(mod: string) {
        return this.blockName + '_' + mod;
    }

    mods(mods: string[]) {
        return mods.map(item => this.mod(item)).join(' ').trim();
    }

    mix(mix: string, mod?: string) {
        return mix + '__' + this.blockName + (mod ? '_' + mod : '');
    }

    mixes(mixes: string[]) {
        return mixes.map(item => {
            if (item.match('_')) {
                const [mix, mod] = item.split('_');

                return this.mix(mix, mod);
            }

            return this.mix(item);
        }).join(' ').trim();
    }

    is(modState: string) {
        return 'is_' + modState;
    }

    has(modState: string) {
        return 'has_' + modState;
    }
}