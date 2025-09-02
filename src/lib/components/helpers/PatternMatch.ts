export type PolePattern = {
    barber: boolean;
    barberKeyline: boolean;
    poleMiddle: boolean;
    poleTopKeyline: boolean;
    poleBottomKeyline: boolean;
    poleTop: boolean;
    poleTopGap: boolean;
    poleBottom: boolean;
    poleBottomGap: boolean;
    poleTopGapTopKeyline: boolean;
    poleTopGapBottomKeyline: boolean;
    poleBottomGapBottomKeyline: boolean;
    poleBottomGapTopKeyline: boolean;
};

export type PatternMap = {
    [key: string]: PolePattern;
};

export type PatternName = keyof PatternMap;

function objectsMatch(obj1: PolePattern, obj2: PolePattern): boolean {
    const keys1 = Object.keys(obj1) as (keyof PolePattern)[];
    const keys2 = Object.keys(obj2) as (keyof PolePattern)[];

    // Check if they have the same number of properties
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all properties match
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// Find which pattern name matches the current polePattern
export function findMatchingPattern(polePattern: PolePattern, patternMap: PatternMap): string | null {
    for (const [patternName, patternObj] of Object.entries(patternMap)) {
        if (objectsMatch(polePattern, patternObj)) {
            return patternName;
        }
    }
    return null; // No match found
}

// Find which pattern object matches the given pattern name
export function findPatternByName(patternName: string, patternMap: PatternMap): PolePattern | null {
    return patternMap[patternName] || null;
}

// Check if polePattern matches a specific pattern by name
export function findAllMatchingPatterns(polePattern: PolePattern, patternMap: PatternMap): string[] {
    const matches: string[] = [];
    for (const [patternName, patternObj] of Object.entries(patternMap)) {
        if (objectsMatch(polePattern, patternObj)) {
            matches.push(patternName);
        }
    }
    return matches;
}

// Update polePattern to match a pattern by name
export function updatePatternToMatch(polePattern: PolePattern, patternMap: PatternMap, patternName: string): boolean {
    const targetPattern = patternMap[patternName];
    if (!targetPattern) {
        console.warn(`Pattern "${patternName}" not found in pattern map`);
        return false;
    }

    // Update each property to match the target pattern
    for (const key of Object.keys(targetPattern) as (keyof PolePattern)[]) {
        polePattern[key] = targetPattern[key];
    }

    return true;
}