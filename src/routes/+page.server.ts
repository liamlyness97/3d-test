import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const params = url.searchParams;

    const frameCol = params.get('frame');
    const forksCol = params.get('forks');
    const poleCol = params.get('pole');
    const poleKeylineCol = params.get('poleKeyline');
    const logoCol = params.get('logo');
    const logoKeylineCol = params.get('logoKeyline');

    return {
        frameCol,
        forksCol,
        logoKeylineCol,
        logoCol,
        poleCol,
        poleKeylineCol
    };
}) satisfies PageServerLoad;