/* eslint-disable */
import type { Token } from './tokens';

export declare const token: {
	(path: Token, fallback?: string): string;
	var: (path: string, fallback?: string) => string;
};

export * from './tokens';
