import {visitWorksheets} from './common';
import worksheetFixture from '../fixtures/worksheets.json';

describe('worksheet', () => {
  before(() => {
    cy.intercept(`/v2.0/default_worksheets`, {}).as(
      'default-worksheet-folders-loaded'
    );
    visitWorksheets('v2.0', worksheetFixture);
    cy.wait('@default-worksheet-folders-loaded');
  });

  it('should be possible to interact with the page here', () => {
    cy.get("[data-cy^='worksheet-options-button-']").first().click();
    cy.get("[data-cy^='worksheet-options-bubble-']").should('be.visible');
  });

  it('should navigating to a tab (here it breaks)', () => {
    //here it breaks, still works wirh cypress 9.1.1
    cy.intercept(`/v2.0/default_worksheets`, {}).as(
      'default-worksheet-folders-loaded'
    );
    cy.intercept('/v1.0/folders', [
      {folderId: '1234', name: 'My worksheets'}
    ]).as('folders-loaded');
    cy.get("[data-cy='worksheets']").click();
    cy.wait(['@folders-loaded', '@default-worksheet-folders-loaded']);
  });

  it('should be empty now', () => {
    cy.get("[data-cy^='worksheet-selected-item']").should('not.exist');
  });
});
