import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const params = url.searchParams;
    const frameCol = params.get('frame');

    return {
        frameCol
    };
}) satisfies PageServerLoad;