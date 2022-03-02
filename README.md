# Project Proposal

## App Description

My web app is called Eatr. It will be powered by the Tasty API, an API that returns receipe data found on Tasty.com. My app will allow users to search for recipes and return nutritional information, ingredient lists, and cooking instructions. Users will be able to add recipes from their search to a "My Recipes" portal, where the users can rate their foods on a variation of the 5 core taste scale (salty, bitter/sour, spicy, sweet, richness/umami). The users' data ratings on each recipe (and their recipes in My Recipes) will be stored in local storage, and the users will be able to compare ratings using a graphical interface on the page. Finally, in the "Recipe Generator" component, the user will be able to return recipes stored in My Recipes based on their desired flavor profile.

## Wireframes

### Homepage

![home](src/images/home.png)

### Search

![search](src/images/search.png)

### Recipe Details

![recipe-details](src/images/recipe-details.png)

### My Recipes Portal

![my-recipes](src/images/my-recipes.png)

## User Stories

As a user, I want to be able to search for a recipe in the home page so that I can immediately find recipes without having to navigate the app.

As a user, I also want to be able to be given broad choices such as "pasta" and "soup" in the homepage so that I can receive ideas on what receipes I would like to look at upon opening the app.

As a user, I want to be able to add recipes to a page where I can store them so that I do not have to keep the same page open for weeks/months.

As a user, I want to be able to rate the recipes I have tasted/cooked so that I can reference them at a later time and prepare the recipes according to the tastes that I am craving on the day.

As a user, I want to be able to filter my recipes based on the taste parameters that I have set on a previously saved recipe, so that I can get recipe ideas when I do not know exactly what to cook.

## API Exmaple

Due to my limited amount of API calls and the gargantuan amount of data included in the API call itself, I plan on running fetching the data in only one component, and using useContext to pass the data to the necessary components downfunnel. Most of the API data won't be used.

### JSON example

```json
"results":[2
0:{
"instructions":[
0:{
"temperature": NULL
"id":70687
"position":1
"display_text":"Place carrots on a baking dish lined with baking paper. Drizzle with olive oil, salt and paprika."
"start_time":0
"appliance": NULL
"end_time":0
}
1:{
"start_time":0
"appliance":"oven"
"end_time":0
"temperature":356
"id":70688
"position":2
"display_text":"Bake at 180°C until tender – approx. 20 minutes."
}
2:{
"position":3
"display_text":"To plate the dish, spread the baba ganoush across the bottom of the entireR plate.  Lay the roast carrots on the baba ganoush and top with corn and pistachio nuts."
"start_time":0
"appliance":NULL
"end_time":0
"temperature":NULL
"id":70689
}
]
"language":"eng"
"tags":[
0:{
"name":"oven"
"id":65846
"display_name":"Oven"
"type":"appliance"
}
1:{
"id":64468
"display_name":"Vegan"
"type":"dietary"
"name":"vegan"
}
2:{
"name":"vegetarian"
"id":64469
"display_name":"Vegetarian"
"type":"dietary"
}
3:{
"name":"healthy"
"id":64466
"display_name":"Healthy"
"type":"dietary"
}
4:{
"name":"under_30_minutes"
"id":64472
"display_name":"Under 30 Minutes"
"type":"difficulty"
}
5:{
"id":64471
"display_name":"Easy"
"type":"difficulty"
"name":"easy"
}
6:{
"name":"weeknight"
"id":64505
"display_name":"Weeknight"
"type":"occasion"
}
7:{
"display_name":"Bake"
"type":"method"
"name":"bake"
"id":64492
}
8:{
"name":"lunch"
"id":64489
"display_name":"Lunch"
"type":"meal"
}
]
"nutrition":{
"carbohydrates":7
"fiber":1
"updated_at":"2022-02-19T07:10:57+01:00"
"protein":2
"fat":6
"calories":91
"sugar":2
}
"name":"Roasted Moroccan Carrots With Baba Ganoush"
"num_servings":8
"updated_at":1646078130
"approved_at":1646078130
"original_video_url":NULL
"id":8113
"inspired_by_url":NULL
"video_ad_content":NULL
"promotion":"full"
"brand":NULL
"description":""
"draft_status":"published"
"seo_title":""
"canonical_id":"recipe:8113"
"cook_time_minutes":NULL
"video_id":NULL
"facebook_posts":[]
"created_at":1644856593
"yields":"Servings: 8"
"nutrition_visibility":"auto"
"show_id":17
"prep_time_minutes":NULL
"video_url":NULL
"credits":[1 item
0:{
"name":"Fiona Anchal"
"type":"community"
}
]
"servings_noun_plural":"servings"
"is_shoppable":true
"keywords":""
"user_ratings":{
"count_positive":0
"score":NULL
"count_negative":0
}
"slug":"roasted-moroccan-carrots-with-baba-ganoush"
"compilations":[
]
"aspect_ratio":"16:9"
"thumbnail_alt_text":""
"is_one_top":false
"country":"US"
"total_time_minutes":NULL
"renditions":[]
"beauty_url":NULL
"total_time_tier":{
"tier":"under_30_minutes"
"display_tier":"Under 30 minutes"
}
"servings_noun_singular":"serving"
"sections":[1 item
0:{
"components":[
0:{
"raw_text":"1 bunch Dutch carrots, washed and tops trimmed"
"extra_comment":"washed and tops trimmed"
"ingredient":{
"display_singular":"dutch carrot"
"updated_at":1645109031
"name":"dutch carrots"
"created_at":1645109031
"display_plural":"dutch carrots"
"id":9581
}
"id":92523
"position":1
"measurements":[1 item
0:{
"unit":{...}
"quantity":"1"
"id":683464
}
]
}
1:{
"position":2
"measurements":[1 item
0:{
"unit":{...}
"quantity":"2"
"id":683458
}
]
"raw_text":"2 large purple carrots, washed and tops trimmed"
"extra_comment":"washed and tops trimmed"
"ingredient":{
"display_singular":"large purple carrot"
"updated_at":1606169464
"name":"large purple carrot"
"created_at":1606169464
"display_plural":"large purple carrots"
"id":7558
}
"id":92524
}
2:{
"extra_comment":""
"ingredient":{
"updated_at":1509035290
"name":"olive oil"
"created_at":1493306183
"display_plural":"olive oils"
"id":4
"display_singular":"olive oil"
}
"id":92525
"position":3
"measurements":[...]1 item
"raw_text":"2 tbsp olive oil"
}
3:{
"raw_text":"1 tsp salt"
"extra_comment":""
"ingredient":{
"created_at":1493314644
"display_plural":"salts"
"id":22
"display_singular":"salt"
"updated_at":1509035288
"name":"salt"
}
"id":92526
"position":4
"measurements":[1 item
0:{
"unit":{
"display_plural":"teaspoons"
"display_singular":"teaspoon"
"abbreviation":"tsp"
"system":"imperial"
"name":"teaspoon"
}
"quantity":"1"
"id":683462
}
]
}
4:{
"raw_text":"1 tsp paprika"
"extra_comment":""
"ingredient":{
"updated_at":1509035286
"name":"paprika"
"created_at":1493430149
"display_plural":"paprikas"
"id":42
"display_singular":"paprika"
}
"id":92527
"position":5
"measurements":[1 item
0:{
"unit":{
"name":"teaspoon"
"display_plural":"teaspoons"
"display_singular":"teaspoon"
"abbreviation":"tsp"
"system":"imperial"
}
"quantity":"1"
"id":683459
}
]
}
5:{
"raw_text":"1 cob of corn, boiled and shucked"
"extra_comment":"boiled and shucked"
"ingredient":{
"name":"corn"
"created_at":1494974377
"display_plural":"corns"
"id":371
"display_singular":"corn"
"updated_at":1509035266
}
"id":92528
"position":6
"measurements":[1 item
0:{
"unit":{...}
"quantity":"1"
"id":683463
}
]
}
6:{
"raw_text":"¼ cup pistachio nuts, chopped"
"extra_comment":"chopped"
"ingredient":{
"display_singular":"pistachio"
"updated_at":1509410956
"name":"pistachio"
"created_at":1509410956
"display_plural":"pistachios"
"id":3170
}
"id":92529
"position":7
"measurements":[
0:{
"unit":{...}
"quantity":"¼"
"id":683467
}
1:{
"unit":{...}
"quantity":"30"
"id":683466
}
]
}
7:{
"raw_text":"1⁄2 cup of Baba Ganoush"
"extra_comment":""
"ingredient":{
"display_singular":"Baba Ganoush"
"updated_at":1645109108
"name":"Baba Ganoush"
"created_at":1645109108
"display_plural":"Baba Ganoushes"
"id":9582
}
"id":92530
"position":8
"measurements":[
0:{
"unit":{
"system":"imperial"
"name":"cup"
"display_plural":"cups"
"display_singular":"cup"
"abbreviation":"c"
}
"quantity":"½"
"id":683465
}
1:{
"unit":{
"system":"metric"
"name":"gram"
"display_plural":"g"
"display_singular":"g"
"abbreviation":"g"
}
"quantity":"85"
"id":683461
}
]
}
]
"name":NULL
"position":1
}
]
"brand_id":NULL
"buzz_id":NULL
"tips_and_ratings_enabled":true
"show":{
"name":"Tasty"
"id":17
}
"thumbnail_url":"https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/f99eecda92ad4aa18d14b5f2130169f4.jpeg"
"topics":[
]
}
```

## App Components/Routing Map

![app-components](src/images/app-components.png)
