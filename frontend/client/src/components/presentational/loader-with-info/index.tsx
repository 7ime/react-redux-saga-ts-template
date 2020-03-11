import * as React from 'react';
import BemShaper from '../../../bem/bem-shaper';
import {EBemClassNames} from '../../../bem/bem-class-names';
import Loader from '../../ui/loaders/components/loader';

import './index.scss';

const bem = new BemShaper(EBemClassNames.loaderWithInfo);

interface IProps {
    title: string;
    description?: string;
    mixes?: string[];
}

const LoaderWithInfo = (props: IProps) => {
    const {
        title,
        description,
        mixes = []
    } = props;

    const classNames = [
        bem.block,
        bem.mixes(mixes)
    ].join(' ').trim();

    return (
        <div className={classNames}>
            <div className={bem.elem('loader-wrap')}>
                <Loader mixes={[bem.block]}/>
            </div>

            <div className={bem.elem('title')}>{title}</div>

            {description && <div className={bem.elem('description')}>{description}</div>}
        </div>
    );
};

export default LoaderWithInfo;