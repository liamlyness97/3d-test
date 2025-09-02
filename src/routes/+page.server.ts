import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const params = url.searchParams;

    const frameCol = `${params.get('frame')}`;
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

    return {
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