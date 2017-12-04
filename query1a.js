db.surveys.aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$unwind: {
			    path : "$survey"
			}
		},

		// Stage 2
		{
			$match: {
				"recv_dt": {
								"$gte": ISODate("2014-01-01T16:45:23.509Z"),
								"$lte": ISODate("2016-03-21T15:45:23.509Z")
							},
				"survey_status": 3
			}
		},

		// Stage 3
		{
			$group: {
				"_id": {
				   "category": "$survey.question_category"
				},
				"average": {
					"$avg": "$survey.response"
				}
			}
		},

		// Stage 4
		{
			$project: {
				"category": "$_id.category",
				"average": 1,
				"_id": 0
			}
		},
	],

	// Options
	{
		cursor: {
			batchSize: 50
		}
	}

	// Created with Studio 3T, the GUI for MongoDB - https://studio3t.com/

);
