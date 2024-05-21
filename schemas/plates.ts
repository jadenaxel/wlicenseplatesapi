export default {
	name: 'plates',
	type: 'document',
	title: 'Plates',
	fields: [
		{
			title: 'Year',
			name: 'year',
			type: 'string',
		},
		{
			title: 'Background',
			name: 'bg',
			type: 'image',
			options: {
				metadata: ['location', 'palette'],
				accept: '.png, .jpg, .jpeg',
				hotspot: true,
			},
		},
		{
			title: 'Image',
			name: 'image',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						metadata: ['location', 'palette'],
						hotspot: true,
					},
				},
			],
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Eligibility',
			name: 'eligibility',
			type: 'text',
		},
		{
			title: 'Plate Type',
			name: 'plateType',
			type: 'string',
		},
		{
			title: 'Note',
			name: 'note',
			type: 'string',
		},
		{
			title: 'Country',
			name: 'country',
			type: 'reference',
			to: [{type: 'countries', title: 'Country'}],
		},
		{
			name: 'categories',
			type: 'array',
			title: 'Categories',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'categories',
							title: 'Categories',
						},
					],
				},
			],
		},
	],
}
