export default {
	name: 'countries',
	type: 'document',
	title: 'Country',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'flag',
			type: 'image',
			title: 'Flag',
			options: {
				metadata: ['location', 'palette'],
				hotspot: true,
			},
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			options: {
				metadata: ['location', 'palette'],
				hotspot: true,
			},
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
		},
		{
			name: 'continent',
			title: 'Continent',
			type: 'reference',
			to: [{type: 'continent', title: 'Contient'}],
		},
		{
			title: 'Plates',
			type: 'array',
			name: 'plates',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'plates',
							title: 'Plates',
						},
					],
				},
			],
		},
	],
}
