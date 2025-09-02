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
    normalScale: number[]
    clearcoatRougness: number;
}

export type Parts = {
    logo: string;
    logoKeyline: string;
    frontLogo: string;
    frontLogoKeyline: string;
    pole: string;
    poleKeyline: string;
    frame: string;
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
    frame: 'string',
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