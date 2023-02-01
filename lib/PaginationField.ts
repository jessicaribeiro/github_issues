import { PAGINATION_QUERY } from '@/components/Pagination';

export default function paginationField() {
    return {
        keyArgs: false, // tells apollo we will take care of everything
        // when apollo tries to query for allProducts.
        // existing items. args is the first and skip values. apollo cache
        // @ts-ignore
        read(existing = [], { args, cache }) {
            console.log('OLEEEE',{ existing, args, cache });
            const { skip, first } = args;
            //   Read the number of items on the page from the cache
            const data = cache.readQuery({ query: PAGINATION_QUERY });

            console.log('OLEEEE DATA',data);

            const count = data?._repository?._issues.totalCount;
            const page = skip / first + 1;
            const pages = Math.ceil(count / first);

            // Check if we have existing items (filter undefined items)
            const items = existing.slice(skip, skip + first).filter((x) => x);

            // If
            // There are items
            // AND there aren't enough items to satisfy how many were requested
            // AND we are on the last page
            // THEN JUST SEND IT
            if (items.length && items.length !== first && page === pages) {
                return items;
            }

            if (items.length !== first) {
                // we dont have any items, we must go to the network to fetch them
                return false;
            }

            // If there are items, just return them from the cache and we dont need to go to the network
            if (items.length) {
                // console.log(
                //   `There are ${items.length} items in the cache! Gonna send them to apollo`
                // );
                return items;
            }

            // fallback to network
            return false;

            // first thing it does is asks the read funtion for those items
            // we can either do one of two things
            // first thing we can do is return the items because they are already in the cache
            // the other thing we can do is to return false from here, and thar will do a network request (there are no items in the cache)
        },

        // runs when we came back from the network with our items
        // existing cache. incoming new items. args of the query
        // @ts-ignore
        merge(existing, incoming, { args }) {
            // this runs when the apollo client comes back from the network with our products
            console.log(`Merging items from the network ${incoming.length}`);

            const { skip, first } = args;

            const merged = existing ? existing.slice(0) : [];

            for (let i = skip; i < skip + incoming.length; ++i) {
                merged[i] = incoming[i - skip];
            }
            // console.log(merged);
            // Finally we return the merged items from the cache,
            // it runs again the read() function, and it will not return false, since it now have items
            return merged;
        },
    };
}

// read -> merge -> read
