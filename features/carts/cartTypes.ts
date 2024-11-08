export interface CartItem {
	book: Book
	quantity: number
}

export interface CartState {
	items: CartItem[]
	totalAmount: number
}
