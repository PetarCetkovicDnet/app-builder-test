import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import View3 from './view3';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders View3 component', () => {
  const wrapper = render(<View3 />);
  expect(wrapper).toBeTruthy();
});