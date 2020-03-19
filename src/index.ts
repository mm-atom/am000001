import { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';

export default interface IAiMobile {
	data: { [key: string]: unknown; };	// !!! Do not modify this
	readonly page: Component<NavigationInjectedProps>;
	readonly local: { [key: string]: unknown; };
	readonly global: { [key: string]: unknown; };
	// eslint-disable-next-line semi
}

export interface IAi extends IAiMobile {
	emit(mm: IAiMobile, event: string, ...args: unknown[]): Promise<unknown>;
}
