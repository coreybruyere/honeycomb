describe('Tooltip', () => {
  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-tooltip--mixed-themes', themeId: 'GoldLight' });

    cy.clock();
    cy.tick(10000);

    cy.percySnapshot('Tooltip');
  });
});
