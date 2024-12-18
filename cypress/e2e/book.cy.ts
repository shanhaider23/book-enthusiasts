describe('Book Details Navigation', () => {
	it('should navigate to the book details page when a book card is clicked', () => {
		cy.visit('/book');

		cy.get('.books__item').first().click();

		cy.url().should('include', '/book/');
	});
});
