(function () {
    // Build the search index with the `SearchIndex` global array defined in `/search/index.js`
    const idx = new FlexSearch({
        doc: {
            id: 'id',
            field: [
                "title",
                "content"
            ]
        }
    });
    idx.add(SearchIndex);

    const srTemplate = document.getElementById('search-result').content;

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
    const SearchResult = function (result, keywords) {
        if (typeof result === 'undefined' || !result.id) {
            this.valid = false;
            return;
        }

        this.id = result.id;
        this.valid = true;
        this.keywords = keywords;
        this.document = SearchIndex[this.id];

        /**
         * Wrap the keywords inside of a string with a prefix and suffix.
         *
         * @param {string} string The string to search in to wrap keywords
         * @param {array} keywords The keywords that we'll be wrapping
         *
         * @returns {string}
         */
        this.wrapKeywords = function(string, keywords) {
            for (let i = 0; i < keywords.length; i++) {
                keywords[i] = keywords[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            }

            const regexpStr = '(' + keywords.join('|') + ')';
            const regex = new RegExp(regexpStr, "g");
            return string.replace(regex, '<span>$1</span>');
        };

        /**
         * Filter the description of search results to only include sentences that contain the found keywords.
         *
         * @param {string} string
         *
         * @returns {string}
         */
        this.formatDescription = function(string) {
            const output = [];

            let content = this.wrapKeywords(string, this.keywords);
            let sentences = content.split(/\.\s+?/);

            for (let i = 0; i < sentences.length; i++) {
                const sentence = sentences[i];

                if (sentence.indexOf('<span>') >= 0) {
                    output.push(sentence);
                }
            }

            return output.join('. ');
        };
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
        link.innerHTML = this.wrapKeywords(this.document.title, this.keywords);

        // Document description
        const desc = node.querySelector('.c-search-result__description');
        desc.innerHTML = this.formatDescription(this.document.content);

        // Show the document permalink
        const permalink = node.querySelector('.c-search-result__permalink');
        permalink.innerText = this.document.permalink;

        return node;
    };

    // UI functionality

    /**
     * Get a parameter from the query string.
     *
     * @param {string} name The name of the parameter
     * @param {string} [url] The URL to parse
     *
     * @see https://stackoverflow.com/a/901144/1239484
     *
     * @returns {string|null} Empty string or null when parameter doesn't exist
     */
    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, '\\$&');

        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);

        if (!results) {
            return null;
        }

        if (!results[2]) {
            return '';
        }

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    /**
     * Load search results into the dom.
     *
     * @param {string} query
     */
    function performSearch(query) {
        searchResults.innerHTML = '';

        if (!query) {
            return;
        }

        const results = idx.search(query, 10);

        if (results.length > 0) {
            const keywords = query.split(/\W+/);

            for (let i = 0; i < results.length; i++) {
                const result = new SearchResult(results[i], keywords);

                if (!result.valid) {
                    continue;
                }

                searchResults.appendChild(result.makeNode());
            }
        }
    }

    const searchResults = document.getElementById('search-results');
    const searchForm = document.getElementById('search-field');

    searchForm.addEventListener('input', function (e) {
        const query = e.currentTarget.value.trim();

        performSearch(query);
    });

    window.onload = function () {
        const query = getParameterByName('query');

        if (query) {
            searchForm.value = query.trim();
            performSearch(searchForm.value);
        }
    };
})();
