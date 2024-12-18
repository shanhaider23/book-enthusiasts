describe('Landing Page Tests', () => {
	it('should load the landing page and display the search bar', () => {
		cy.visit('/home');

		cy.get('input[placeholder="Search for books..."]').should('exist');

		cy.get('button[type="submit"]').should('exist');

		cy.contains('Search Results').should('not.exist');
	});
});
