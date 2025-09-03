import { materials, partsConfig, patternMap, polePattern } from "$lib/Materials.svelte";
import { updatePatternToMatch } from "./PatternMatch";

export function sharedBike(bike) {
    function findColour(array, value) {
        const colour = array.find((colour) => colour['number'] === value);
        return colour.colour;
    }

    function findColourName(array, value) {
        const colour = array.find((colour) => colour['number'] === value);
        return colour.name;
    }


    if (bike.frame.colourNumber) {
        partsConfig.frame = {
            colour: findColour(
                materials[bike.frame.material].colours,
                Number(bike.frame.colourNumber)
            ),
            colourName: findColourName(
                materials[bike.frame.material].colours,
                Number(bike.frame.colourNumber)
            ),
            colourNumber: Number(bike.frame.colourNumber),
            roughness: materials[bike.frame.material].roughness,
            metalness: materials[bike.frame.material].metalness,
            transmission: materials[bike.frame.material].transmission,
            transparent: materials[bike.frame.material].transparent,
            clearcoat: materials[bike.frame.material].clearcoat,
            normalMap: true,
            normalScale: [
                materials[bike.frame.material].normalScale[0],
                materials[bike.frame.material].normalScale[1]
            ],
            clearcoatRougness: materials[bike.frame.material].clearcoatRoughness,
            materialType: `${bike.frame.material}`
        };
    }
    if (bike.forks.colourNumber) {
        partsConfig.forks = {
            colour: findColour(
                materials[bike.forks.material].colours,
                Number(bike.forks.colourNumber)
            ),
            colourName: findColourName(
                materials[bike.forks.material].colours,
                Number(bike.forks.colourNumber)
            ),
            colourNumber: Number(bike.forks.colourNumber),
            roughness: materials[bike.forks.material].roughness,
            metalness: materials[bike.forks.material].metalness,
            transmission: materials[bike.forks.material].transmission,
            transparent: materials[bike.forks.material].transparent,
            clearcoat: materials[bike.forks.material].clearcoat,
            normalMap: true,
            normalScale: [
                materials[bike.forks.material].normalScale[0],
                materials[bike.forks.material].normalScale[1]
            ],
            clearcoatRougness: materials[bike.forks.material].clearcoatRoughness,
            materialType: `${bike.forks.material}`
        };
    }
    if (bike.rearForksTop.colourNumber) {
        partsConfig.rearForksTop = {
            colour: findColour(
                materials[bike.rearForksTop.material].colours,
                Number(bike.rearForksTop.colourNumber)
            ),
            colourName: findColourName(
                materials[bike.rearForksTop.material].colours,
                Number(bike.rearForksTop.colourNumber)
            ),
            colourNumber: Number(bike.rearForksTop.colourNumber),
            roughness: materials[bike.rearForksTop.material].roughness,
            metalness: materials[bike.rearForksTop.material].metalness,
            transmission: materials[bike.rearForksTop.material].transmission,
            transparent: materials[bike.rearForksTop.material].transparent,
            clearcoat: materials[bike.rearForksTop.material].clearcoat,
            normalMap: true,
            normalScale: [
                materials[bike.rearForksTop.material].normalScale[0],
                materials[bike.rearForksTop.material].normalScale[1]
            ],
            clearcoatRougness: materials[bike.rearForksTop.material].clearcoatRoughness,
            materialType: `${bike.rearForksTop.material}`
        };
    }
    if (bike.rearForksBottom.colourNumber) {
        partsConfig.rearForksBottom = {
            colour: findColour(
                materials[bike.rearForksBottom.material].colours,
                Number(bike.rearForksBottom.colourNumber)
            ),
            colourName: findColourName(
                materials[bike.rearForksBottom.material].colours,
                Number(bike.rearForksBottom.colourNumber)
            ),
            colourNumber: Number(bike.rearForksBottom.colourNumber),
            roughness: materials[bike.rearForksBottom.material].roughness,
            metalness: materials[bike.rearForksBottom.material].metalness,
            transmission: materials[bike.rearForksBottom.material].transmission,
            transparent: materials[bike.rearForksBottom.material].transparent,
            clearcoat: materials[bike.rearForksBottom.material].clearcoat,
            normalMap: true,
            normalScale: [
                materials[bike.rearForksBottom.material].normalScale[0],
                materials[bike.rearForksBottom.material].normalScale[1]
            ],
            clearcoatRougness: materials[bike.rearForksBottom.material].clearcoatRoughness,
            materialType: `${bike.rearForksBottom.material}`
        };
    }
    if (bike.rearForksBracket.colourNumber) {
        partsConfig.rearForksBracket = {
            colour: findColour(
                materials[bike.rearForksBracket.material].colours,
                Number(bike.rearForksBracket.colourNumber)
            ),
            colourName: findColourName(
                materials[bike.rearForksBracket.material].colours,
                Number(bike.rearForksBracket.colourNumber)
            ),
            colourNumber: Number(bike.rearForksBracket.colourNumber),
            roughness: materials[bike.rearForksBracket.material].roughness,
            metalness: materials[bike.rearForksBracket.material].metalness,
            transmission: materials[bike.rearForksBracket.material].transmission,
            transparent: materials[bike.rearForksBracket.material].transparent,
            clearcoat: materials[bike.rearForksBracket.material].clearcoat,
            normalMap: true,
            normalScale: [
                materials[bike.rearForksBracket.material].normalScale[0],
                materials[bike.rearForksBracket.material].normalScale[1]
            ],
            clearcoatRougness: materials[bike.rearForksBracket.material].clearcoatRoughness,
            materialType: `${bike.rearForksBracket.material}`
        };
    }
    if (bike.rearForksArch.colourNumber) {
        partsConfig.rearForksArch = {
            colour: findColour(
                materials[bike.rearForksArch.material].colours,
                Number(bike.rearForksArch.colourNumber)
            ),
            colourName: findColourName(
                materials[bike.rearForksArch.material].colours,
                Number(bike.rearForksArch.colourNumber)
            ),
            colourNumber: Number(bike.rearForksArch.colourNumber),
            roughness: materials[bike.rearForksArch.material].roughness,
            metalness: materials[bike.rearForksArch.material].metalness,
            transmission: materials[bike.rearForksArch.material].transmission,
            transparent: materials[bike.rearForksArch.material].transparent,
            clearcoat: materials[bike.rearForksArch.material].clearcoat,
            normalMap: true,
            normalScale: [
                materials[bike.rearForksArch.material].normalScale[0],
                materials[bike.rearForksArch.material].normalScale[1]
            ],
            clearcoatRougness: materials[bike.rearForksArch.material].clearcoatRoughness,
            materialType: `${bike.rearForksArch.material}`
        };
    }
    if (bike.logo != 'null') {
        partsConfig.logo = bike.logo;
    }
    if (bike.logoKeyline != 'null') {
        partsConfig.logoKeyline = bike.logoKeyline;
    }
    if (bike.frontLogo != 'null') {
        partsConfig.frontLogo = bike.frontLogo;
    }
    if (bike.frontLogoKeyline != 'null') {
        partsConfig.frontLogoKeyline = bike.frontLogoKeyline;
    }
    if (bike.pole != 'null') {
        partsConfig.pole = bike.pole;
    }
    if (bike.poleKeyline != 'null') {
        partsConfig.poleKeyline = bike.poleKeyline;
    }

    if (bike.polePattern) {
        updatePatternToMatch(polePattern, patternMap, bike.polePattern);
    }
}