import React from 'react';
import MarginBetween from './MarginBetween';
import { render } from '@testing-library/react';

describe('MarginBetween tests', () => {
  describe('no margins', () => {
    test('matches snapshot if no children are passed', () => {
      const { asFragment } = render(<MarginBetween />);

      expect(asFragment()).toMatchSnapshot();
    });

    test('matches snapshot if one child passed', () => {
      const { asFragment } = render(
        <MarginBetween>
          <div>child1</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    test('matches snapshot if two children passed', () => {
      const { asFragment } = render(
        <MarginBetween>
          <div>child1</div>
          <div>child2</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('horizontal margin', () => {
    test('matches snapshot if one child passed', () => {
      const { asFragment } = render(
        <MarginBetween marginHorizontal='1em'>
          <div>child1</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    test('matches snapshot if two children passed', () => {
      const { asFragment } = render(
        <MarginBetween marginHorizontal='1em'>
          <div>child1</div>
          <div>child2</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('vertical margin', () => {
    test('matches snapshot if one child passed', () => {
      const { asFragment } = render(
        <MarginBetween marginVertical='1em'>
          <div>child1</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    test('matches snapshot if two children passed', () => {
      const { asFragment } = render(
        <MarginBetween marginVertical='1em'>
          <div>child1</div>
          <div>child2</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('both margins', () => {
    test('matches snapshot if one child passed', () => {
      const { asFragment } = render(
        <MarginBetween marginVertical='1em' marginHorizontal='2em'>
          <div>child1</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    test('matches snapshot if two children passed', () => {
      const { asFragment } = render(
        <MarginBetween marginVertical='1em' marginHorizontal='2em'>
          <div>child1</div>
          <div>child2</div>
        </MarginBetween>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
