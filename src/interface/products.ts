export interface IProduct {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    release: IRelease;
    tail: string;
    type: string;
}

export interface IRelease {
    au: string;
    eu: string;
    jp: string;
    na: string;
}