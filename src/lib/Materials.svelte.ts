import type { PatternMap, PolePattern } from "./components/helpers/PatternMatch";

export type Material = {
    colour: string;
    colourName: string;
    colourNumber: number;
    materialType: 'enamel' | 'flamboyant' | 'pearl' | 'polychromatic';
    roughness: number;
    metalness: number;
    transmission: number;
    transparent: boolean;
    clearcoat: number;
    normalMap: boolean;
    normalScale: number | [x: number, y: number] | undefined
    clearcoatRougness: number;
}

export type Parts = {
    logo: string;
    logoKeyline: string;
    frontLogo: string;
    frontLogoKeyline: string;
    pole: string;
    poleKeyline: string;
    frame: Material;
    forks: Material;
    rearForks: string;
    rearForksTop: string;
    rearForksBottom: string;
    rearForksBracket: string;
    rearForksArch: string;
    nuts: string;
    axel: string;
    tire: string;
    lugs: string;
}

export const partsConfig: Parts = $state({
    logo: 'string',
    logoKeyline: 'string',
    frontLogo: 'string',
    frontLogoKeyline: 'string',
    pole: 'string',
    poleKeyline: 'string',
    frame: {
        colour: '#000000',
        colourName: 'Black Pearl',
        colourNumber: 34,
        roughness: 0.5,
        metalness: 0.9,
        transmission: 0.6,
        transparent: true,
        clearcoat: 1,
        normalMap: true,
        normalScale: [0.4, 0.6],
        clearcoatRougness: 0.1,
        materialType: 'pearl'
    },
    forks: {
        colour: '#000000',
        colourName: 'Black Pearl',
        colourNumber: 34,
        roughness: 0.5,
        metalness: 0.9,
        transmission: 0.6,
        transparent: true,
        clearcoat: 1,
        normalMap: true,
        normalScale: [0.4, 0.6],
        clearcoatRougness: 0.1,
        materialType: 'pearl'
    },
    rearForks: 'string',
    rearForksTop: 'string',
    rearForksBottom: 'string',
    rearForksBracket: 'string',
    rearForksArch: 'string',
    nuts: 'string',
    axel: 'string',
    tire: 'string',
    lugs: 'string',
})

export const materials = {
    flamboyant: {},
    polychromatic: {},
    enamel: {},
    vinyl: {},
    pearl: {
        roughness: 0.5,
        metalness: 0.9,
        transmission: 0.6,
        transparent: true,
        clearcoat: 1,
        normalMap: true,
        normalScale: [0.4, 0.6],
        clearcoatRougness: 0.1,
        colours: [
            { name: 'Black Pearl', colour: '#000000', number: 34 },
            { name: 'Rose Pearl', colour: '#DBACB6', number: 39 },
            { name: 'Flame Red Pearl', colour: '#960202', number: 43 },
            { name: 'Silver Pearl', colour: '#a19f9f', number: 44 },
            { name: 'Electric Blue Pearl', colour: '#120F6C', number: 45 },
            { name: 'White Pearl', colour: '#ffffff', number: 46 },
            { name: 'Turquoise Pearl', colour: '#37a8c4', number: 47 },
            { name: 'Lemon Pearl', colour: '#F0CC00', number: 48 },
            { name: 'Dusky Pink Pearl', colour: '#CD4764', number: 49 },
            { name: 'Midnight Blue Pearl', colour: '#151345', number: 50 },
            { name: 'Moss Green Pearl', colour: '#74AF80', number: 51 },
            { name: 'Tobacco Pearl', colour: '#36272B', number: 52 },
            { name: 'Mauve Pearl', colour: '#C094DB', number: 53 },
            { name: 'Purple Pearl', colour: '#480075', number: 54 },
            { name: 'Deep Plumb Pearl', colour: '#320427', number: 56 },
            { name: 'Blue Intenso Pearl', colour: '#0960D3', number: 58 },
            { name: 'Champagne Pearl', colour: '#DCC69F', number: 59 },
            { name: 'Racing Green Pearl', colour: '#08482C', number: 60 },
            { name: 'Ice Blue Pearl', colour: '#30D6F3', number: 61 },
            { name: 'Leaf Green Pearl', colour: '#398C73', number: 62 },
            { name: 'Orange Pearl', colour: '#DD6203', number: 63 },
        ]
    }
}

export const polePattern: PolePattern = $state({
    barber: true,
    barberKeyline: true,
    poleMiddle: false,
    poleTopKeyline: false,
    poleBottomKeyline: false,
    poleTop: false,
    poleTopGap: false,
    poleBottom: false,
    poleBottomGap: false,
    poleTopGapTopKeyline: false,
    poleTopGapBottomKeyline: false,
    poleBottomGapBottomKeyline: false,
    poleBottomGapTopKeyline: false
})

export const patternMap: PatternMap = $state({
    barber: {
        barber: true,
        barberKeyline: true,
        poleMiddle: false,
        poleTopKeyline: false,
        poleBottomKeyline: false,
        poleTopGap: false,
        poleTop: false,
        poleBottom: false,
        poleBottomGap: false,
        poleTopGapTopKeyline: false,
        poleTopGapBottomKeyline: false,
        poleBottomGapBottomKeyline: false,
        poleBottomGapTopKeyline: false
    },
    solid: {
        barber: false,
        barberKeyline: false,
        poleMiddle: true,
        poleTopKeyline: true,
        poleBottomKeyline: true,
        poleTopGap: true,
        poleTop: true,
        poleBottom: true,
        poleBottomGap: true,
        poleTopGapTopKeyline: false,
        poleTopGapBottomKeyline: false,
        poleBottomGapBottomKeyline: false,
        poleBottomGapTopKeyline: false,
    },
    split: {
        barber: false,
        barberKeyline: false,
        poleMiddle: true,
        poleTopKeyline: true,
        poleBottomKeyline: true,
        poleTopGap: false,
        poleTop: true,
        poleBottom: true,
        poleBottomGap: false,
        poleTopGapTopKeyline: true,
        poleTopGapBottomKeyline: true,
        poleBottomGapBottomKeyline: true,
        poleBottomGapTopKeyline: true,
    },
    none: {
        barber: false,
        barberKeyline: false,
        poleMiddle: false,
        poleTopKeyline: false,
        poleBottomKeyline: false,
        poleTop: false,
        poleTopGap: false,
        poleBottom: false,
        poleBottomGap: false,
        poleTopGapTopKeyline: false,
        poleTopGapBottomKeyline: false,
        poleBottomGapBottomKeyline: false,
        poleBottomGapTopKeyline: false
    }
})