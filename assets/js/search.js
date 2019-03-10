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
        this.valid = true;
        this.metadata = result.matchData.metadata;
        this.keywords = Object.keys(this.metadata);
        this.document = LunrIndex[this.id];

        /**
         * Insert a string at the specified index.
         *
         * @param {string} string
         * @param {number} index
         * @param {string} insert
         *
         * @returns {string}
         */
        this.strInsert = function(string, index, insert) {
            return string.substr(0, index) + insert + string.substr(index);
        };

        /**
         * Wrap the keywords inside of a string with a prefix and suffix.
         *
         * @param {string} string The string to search in to wrap Lunr keywords
         * @param {string} field The field of the Lunr result that we'll be wrapping
         *
         * @returns {string}
         */
        this.wrapKeywords = function(string, field) {
            const prefix = '<span>';
            const suffix = '</span>';

            let text = string;
            let offset = 0;

            for (let i = 0; i < this.keywords.length; i++) {
                const keyword = this.keywords[i];

                if (text.toLowerCase().indexOf(keyword) >= 0) {
                    const resultField = this.metadata[keyword][field];

                    if (typeof resultField === 'undefined') {
                        break;
                    }

                    const positions = resultField.position;

                    for (let j = 0; j < positions.length; j++) {
                        const position = positions[j];

                        text = this.strInsert(text, position[0] + offset, prefix);
                        offset += prefix.length;

                        text = this.strInsert(text, position[0] + position[1] + offset, suffix);
                        offset += suffix.length;
                    }
                }
            }

            return text;
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

            let content = this.wrapKeywords(string, 'content');
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
        link.innerHTML = this.wrapKeywords(this.document.title, 'title');

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

        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
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
        if (!query) {
            return;
        }

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

    const searchResults = document.querySelector('#search-results');
    const searchForm = document.querySelector('#search-field');

    searchForm.addEventListener('keyup', function (e) {
        const query = e.currentTarget.value.trim();

        performSearch(query);
    });

    window.onload = function () {
        const query = getParameterByName('query').trim();

        searchForm.value = query;
        performSearch(query);
    };
})();
