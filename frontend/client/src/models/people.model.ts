namespace IPeople {
    export interface ModelAPI {
        name: string;
        mass: string;
        gender: 'male' | 'female';
    }

    export interface Model extends ModelAPI {

    }
}

export default IPeople;