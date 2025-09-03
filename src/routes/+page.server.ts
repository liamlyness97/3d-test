import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const params = url.searchParams;

    const bikeSetup = {
        frame: { material: decodeURIComponent(params.get('frame')).split(' ')[0], colourNumber: decodeURIComponent(params.get('frame')).split(' ')[1] },
        forks: { material: decodeURIComponent(params.get('forks')).split(' ')[0], colourNumber: decodeURIComponent(params.get('forks')).split(' ')[1] },
        rearForksTop: { material: decodeURIComponent(params.get('rearForksTop')).split(' ')[0], colourNumber: decodeURIComponent(params.get('rearForksTop')).split(' ')[1] },
        rearForksBottom: { material: decodeURIComponent(params.get('rearForksBottom')).split(' ')[0], colourNumber: decodeURIComponent(params.get('rearForksBottom')).split(' ')[1] },
        rearForksBracket: { material: decodeURIComponent(params.get('rearForksBracket')).split(' ')[0], colourNumber: decodeURIComponent(params.get('rearForksBracket')).split(' ')[1] },
        rearForksArch: { material: decodeURIComponent(params.get('rearForksArch')).split(' ')[0], colourNumber: decodeURIComponent(params.get('rearForksArch')).split(' ')[1] },
        pole: `${decodeURIComponent(params.get('pole'))}`,
        poleKeyline: `${decodeURIComponent(params.get('poleKeyline'))}`,
        logo: `${decodeURIComponent(params.get('logo'))}`,
        logoKeyline: `${decodeURIComponent(params.get('logoKeyline'))}`,
        frontLogo: `${decodeURIComponent(params.get('frontLogo'))}`,
        frontLogoKeyline: `${decodeURIComponent(params.get('frontLogoKeyline'))}`,
        polePattern: params.get('pattern'),
    }

    const frameCol = `${decodeURIComponent(params.get('frame'))}`;
    const forksCol = `${params.get('forks')}`;
    const rearForksTopCol = `${params.get('rearForksTop')}`;
    const rearForksBottomCol = `${params.get('rearForksBottom')}`;
    const rearForksBracketCol = `${params.get('rearForksBracket')}`;
    const rearForksArchCol = `${params.get('rearForksArch')}`;
    const poleCol = `${decodeURIComponent(params.get('pole'))}`;
    const poleKeylineCol = `${decodeURIComponent(params.get('poleKeyline'))}`;
    const logoCol = `${decodeURIComponent(params.get('logo'))}`;
    const logoKeylineCol = `${decodeURIComponent(params.get('logoKeyline'))}`;
    const frontLogoCol = `${decodeURIComponent(params.get('frontLogo'))}`;
    const frontLogoKeylineCol = `${decodeURIComponent(params.get('frontLogoKeyline'))}`;
    const polePattern = params.get('pattern');

    console.log(bikeSetup)

    return {
        bikeSetup,
        frameCol,
        forksCol,
        rearForksTopCol,
        rearForksBottomCol,
        rearForksBracketCol,
        rearForksArchCol,
        logoKeylineCol,
        logoCol,
        frontLogoKeylineCol,
        frontLogoCol,
        poleCol,
        poleKeylineCol,
        polePattern
    };
}) satisfies PageServerLoad;