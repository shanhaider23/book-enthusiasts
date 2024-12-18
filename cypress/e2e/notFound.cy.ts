describe('404 Page Not Found', () => {
	it('should display the 404 page for an invalid route', () => {
		cy.visit('/non-existent-route', { failOnStatusCode: false });

		cy.contains('404 - Page Not Found').should('exist');

		cy.contains('Go back to Home').click();

		cy.url().should('include', '/home');
	});
});
