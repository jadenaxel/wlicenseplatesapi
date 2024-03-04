export default {
	name: 'continent',
	type: 'document',
	title: 'Continent',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'platesNumber',
			type: 'number',
			title: 'Plates Quantity',
		},
		{
			name: 'image',
			type: 'string',
			title: 'Image',
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
		},
		{
			name: 'countriesQuantity',
			type: 'number',
			title: 'Country Quantity',
		},
		{
			name: 'countries',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'countries',
							title: 'Country',
						},
					],
				},
			],
		},
	],
}
