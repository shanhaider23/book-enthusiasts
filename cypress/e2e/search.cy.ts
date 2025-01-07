describe('Book Search Functionality', () => {
	it('should show search results when searching for a book', () => {
		cy.visit('/home');
		cy.get('input[placeholder="Search for books..."]').type('Harry Potter');
		cy.get('button[type="submit"]').click();
		cy.contains('Search Results').should('exist');
		cy.get('.landing-page__search-results .book-card').should(
			'have.length.at.least',
			1
		);
	});

	it('should display an error for no matching books', () => {
		cy.visit('/home');

		cy.get('input[placeholder="Search for books..."]').type(
			'NonExistentBook123'
		);

		cy.get('button[type="submit"]').click();

		cy.contains('No books found matching your search.').should('exist');
	});
});
