const replaceRole =
  (userConfig: any) =>
  (original: string, replacement: string): string[] =>
    userConfig.roles.map((r: any) => {
      if (r === original || r === `${original}#off`) {
        return replacement;
      }
      return r;
    });

const mockAndChainUserConfig = (userConfig: any) => {
  return cy
    .intercept('/config/user', userConfig)
    .as('user-config-loaded')
    .then(
      // so that the method returns the (chainable) merged userConfig
      () => userConfig
    );
};

export const changeAndInterceptUserConfig = (
  withUserConfig: (uc: any) => any
) => {
  return cy
    .fixture('userConfig')
    .then(fixture => withUserConfig(fixture))
    .as('userConfig')
    .then(mockAndChainUserConfig);
};

export const visitWorksheets = (
  version: 'v1.0' | 'v2.0',
  userWorksheetFixture: {worksheets: any},
  groups: any[] = []
) => {
  const userWorksheetId = '1234';
  cy.intercept('/v1.0/folders', [
    {folderId: userWorksheetId, name: 'My worksheets'}
  ]).as('folders-loaded');
  cy.intercept(
    `/v1.0/worksheets?folder=${userWorksheetId}`,
    userWorksheetFixture
  ).as('worsheet-folder-loaded');
  changeAndInterceptUserConfig(userConfig => {
    const newRoles = replaceRole(userConfig)(
      'f:default_worksheet_folders',
      version === 'v2.0'
        ? 'f:default_worksheet_folders'
        : 'f:default_worksheet_folders#off'
    );
    const newFeatures = {
      ...userConfig.features,
      defaultWorksheetFolders: version === 'v2.0'
    };
    return {
      ...userConfig,
      roles: newRoles,
      features: newFeatures
    };
  });
  cy.visit(`/app/teacher.html#/worksheet-folders/${userWorksheetId}`);
  cy.wait([
    '@user-config-loaded',
    '@folders-loaded',
    '@worsheet-folder-loaded'
  ]);
};
