import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const params = url.searchParams;

    const frameCol = params.get('frame');
    const forksCol = params.get('forks');
    const rearForksCol = params.get('rearForks');
    const poleCol = params.get('pole');
    const poleKeylineCol = params.get('poleKeyline');
    const logoCol = params.get('logo');
    const logoKeylineCol = params.get('logoKeyline');
    const frontLogoCol = params.get('frontLogo');
    const frontLogoKeylineCol = params.get('frontLogoKeyline');

    return {
        frameCol,
        forksCol,
        rearForksCol,
        logoKeylineCol,
        logoCol,
        frontLogoKeylineCol,
        frontLogoCol,
        poleCol,
        poleKeylineCol
    };
}) satisfies PageServerLoad;