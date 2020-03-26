import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { BottomTabBarProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type ParamList = ParamListBase;

type ScreenNavigationProp = StackNavigationProp<ParamList> | DrawerNavigationProp<ParamList> | MaterialBottomTabNavigationProp<ParamList> | BottomTabNavigationProp<ParamList>;

type ScreenRouteProp = RouteProp<ParamList, 'mmstudio'>;

type Props = {
	navigation: ScreenNavigationProp;
	route: ScreenRouteProp;
} | BottomTabBarProps;

export default interface IAiMobile {
	props: Props;
	readonly local: { [key: string]: unknown; };
	set_data<T>(key: string, value: T): void;
	emit(mm: IAiMobile, event: string, ...args: unknown[]): Promise<unknown>;
	// eslint-disable-next-line semi
}
