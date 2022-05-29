import { HelloParams } from './types';

/**
 * Hello, this function greets you.
 * @param name {string} Your name
 * @return A formatted greeting
 */
export function useHello({ name }: HelloParams) {
  return `Hi ${name}!`;
}

export * from './types';
