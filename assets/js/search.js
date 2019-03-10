(function () {
    // Build the Lunr.js search index with the `LunrIndex` global array defined in `/search/index.js`
    const idx = lunr(function () {
        this.field('title', { boost: 1.3 });
        this.field('content', { boost: 0.8 });
        this.metadataWhitelist = ['position'];

        for (let i = 0; i < LunrIndex.length; i++) {
            let document = LunrIndex[i];

            this.add(document);
        }
    });

    const srTemplate = document.querySelector('#search-result').content;

    if (!srTemplate) {
        console.error('Search result template was not found on this page.');
        return;
    }

    /**
     * A search result.
     *
     * @constructor
     *
     * @param result
     */
    const SearchResult = function (result) {
        if (typeof result === 'undefined' || !result.ref) {
            this.valid = false;
            return;
        }

        this.id = result.ref;
        this.metadata = result.matchData.metadata;
        this.document = LunrIndex[this.id];
        this.valid = true;
    };

    /**
     * Create a node for this search result.
     *
     * @returns {Node}
     */
    SearchResult.prototype.makeNode = function () {
        const node = srTemplate.cloneNode(true);

        // Set up the link for the search result
        const link = node.querySelector('.c-search-result__title a');
        link.setAttribute('href', this.document.permalink);
        link.innerText = this.document.title;

        // Document description
        const desc = node.querySelector('.c-search-result__description');
        desc.innerHTML = this.document.content;

        // Show the document permalink
        const permalink = node.querySelector('.c-search-result__permalink');
        permalink.innerText = this.document.permalink;

        return node;
    };

    // UI functionality

    const searchForm = document.querySelector('#search-field');
    const searchResults = document.querySelector('#search-results');

    searchForm.addEventListener('keyup', function (e) {
        const query = e.currentTarget.value.trim();

        if (query) {
            searchResults.innerHTML = '';

            const results = idx.search(query);
            const maxResults = Math.max(results.length, 10);

            for (let i = 0; i < maxResults; i++) {
                const result = new SearchResult(results[i]);

                if (!result.valid) {
                    continue;
                }

                searchResults.appendChild(result.makeNode());
            }
        }
    });
})();
