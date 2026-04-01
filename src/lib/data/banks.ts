export interface BankAccount {
	id: string;
	name: string;
	shortName: string;
	bankCode: string;
	accountNumber: string;
	accountName: string;
	logoSrc: string;
}

export interface PaypalLink {
	name: string;
	url: string;
}

export const banks: BankAccount[] = [
	{
		id: 'vcb',
		name: 'Vietcombank',
		shortName: 'VCB',
		bankCode: 'VCB',
		accountNumber: '1041732363',
		accountName: 'NGUYEN NAM',
		logoSrc: '/static/vcb.svg'
	},
	{
		id: 'tcb',
		name: 'Techcombank',
		shortName: 'TCB',
		bankCode: 'TCB',
		accountNumber: '4005080920',
		accountName: 'LE HOANG CAT',
		logoSrc: '/static/tcb.svg'
	}
];

export const paypalLinks: PaypalLink[] = [
	{ name: 'SandL6', url: 'https://paypal.me/SandL6' },
	{ name: 'namnguyen2208', url: 'https://paypal.me/namnguyen2208' }
];

export function getQRUrl(bank: BankAccount): string {
	return `https://img.vietqr.io/image/${bank.bankCode}-${bank.accountNumber}-qr_only.png`;
}
