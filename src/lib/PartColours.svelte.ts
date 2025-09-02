import type { PatternMap, PolePattern } from "./components/helpers/PatternMatch";

export type PartColours = {
    logo: string;
    logoKeyline: string;
    frontLogo: string;
    frontLogoKeyline: string;
    pole: string;
    poleKeyline: string;
    frame: string;
    forks: string;
    rearForks: string;
    rearForksTop: string;
    rearForksBottom: string;
    rearForksBracket: string;
    rearForksArch: string;
    nuts: string;
    axel: string;
    tire: string;
    barWrap: string;
    handleBar: string;
    frontRim: string;
    frontSpokes: string;
    backSpokes: string;
    frontSpokeJoint: string;
    backSpokeJoint: string;
    frontHub: string;
    backHub: string;
    crankSet: string;
    pedals: string;
    stem: string;
    barSpacers: string;
    stemBolts: string;
    headSet: string;
    stemCap: string;
    saddleRails: string;
    seatClamp: string;
    seatPost: string;
    seatPostClamp: string;
    crankOuter: string;
    crankInner: string;
    chain: string;
    rearCrank: string;
    lugs: string;
}

export const partColours: PartColours = $state({
    logo: '#ffffff',
    logoKeyline: '#025c8d',
    frontLogo: '#ffffff',
    frontLogoKeyline: '#025c8d',
    pole: '#ffffff',
    poleKeyline: '#025c8d',
    frame: '#120F6C',
    forks: '#120F6C',
    rearForks: '#120F6C',
    rearForksTop: '#120F6C',
    rearForksBottom: '#120F6C',
    rearForksBracket: '#120F6C',
    rearForksArch: '#120F6C',
    nuts: '#171717',
    axel: '#e0e0e0',
    tire: '#171717',
    barWrap: '#691c07',
    handleBar: '#e0e0e0',
    frontRim: '#e0e0e0',
    frontSpokes: '#171717',
    backSpokes: '#171717',
    frontSpokeJoint: 'hsl(201, 97%, 28%)',
    backSpokeJoint: 'hsl(201, 97%, 28%)',
    frontHub: 'hsl(201, 97%, 28%)',
    backHub: 'hsl(201, 97%, 28%)',
    crankSet: 'hsl(201, 97%, 28%)',
    pedals: '#141414',
    stem: 'hsl(201, 97%, 28%)',
    barSpacers: '#171717',
    stemBolts: '#171717',
    headSet: 'hsl(201, 97%, 28%)',
    stemCap: '#171717',
    saddleRails: '#e0e0e0',
    seatClamp: 'hsl(201, 97%, 28%)',
    seatPost: '#171717',
    seatPostClamp: 'hsl(201, 97%, 28%)',
    crankOuter: '#171717',
    crankInner: 'hsl(201, 97%, 28%)',
    chain: '#171717',
    rearCrank: '#e0e0e0',
    lugs: '#560606'
});

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

export const colourMap = $state({
    blue: '#025c8d',
    green: '#248048',
    red: '#BF1900',
    orange: '#E8721C',
    pink: '#d56c7a',
    black: '#151619',
    white: '#ffffff',
    electricBlue: '#120F6C',
    silver: '#8A8A8A',
    purple: '#5c1970'
})

export const hexToColourName = $state({
    '#025c8d': 'blue',
    '#248048': 'green',
    '#BF1900': 'red',
    '#E8721C': 'orange',
    '#d56c7a': 'pink',
    '#151619': 'black',
    '#ffffff': 'white',
    '#120F6C': 'electricBlue',
    '#8A8A8A': 'silver',
    '#5c1970': 'purple'
});
