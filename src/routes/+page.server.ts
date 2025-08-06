import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const params = url.searchParams;

    const frameCol = params.get('frame');
    const forksCol = params.get('forks');
    const lugsCol = params.get('lugs');
    const logoCol = params.get('logo');

    return {
        frameCol,
        forksCol,
        lugsCol,
        logoCol
    };
}) satisfies PageServerLoad;