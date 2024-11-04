import { render } from '@testing-library/react';

import SharedDom from './';

describe('SharedDom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDom />);
    expect(baseElement).toBeTruthy();
  });
});
