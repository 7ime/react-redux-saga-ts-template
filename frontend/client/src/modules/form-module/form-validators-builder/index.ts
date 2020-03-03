import IFormValidatorsBuilder from './model';
import IFormValidators from '../form-validators/model';

import {EValidatorsRules, IFormRule} from '../shared';

export default abstract class FormValidatorsBuilder {
    static minLength(count: number, prompt: string): IFormRule<IFormValidators.MinLengthParams> {
        return {
            type: EValidatorsRules.minLength,
            prompt,
            params: {
                count
            }
        };
    }

    static maxLength(count: number, prompt: string): IFormRule<IFormValidators.MaxLengthParams> {
        return {
            type: EValidatorsRules.maxLength,
            prompt,
            params: {
                count
            }
        };
    }

    static match(withField: string, prompt: string): IFormRule<IFormValidatorsBuilder.MatchParams> {
        return {
            type: EValidatorsRules.match,
            prompt,
            params: {
                withField
            }
        };
    }

    static required(prompt: string): IFormRule {
        return {
            type: EValidatorsRules.required,
            prompt
        };
    }

    static email(prompt: string): IFormRule {
        return {
            type: EValidatorsRules.email,
            prompt
        };
    }
}