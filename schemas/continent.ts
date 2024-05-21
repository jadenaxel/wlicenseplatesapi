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
