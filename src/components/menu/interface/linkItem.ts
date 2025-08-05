export type BaseItem = {
	route: string;
	text: string;
	route_complete: string;
	svg: string;
};

export type LinkItem = BaseItem & {
	subLinks?: BaseItem[]; 
};