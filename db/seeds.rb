require 'faker' 
require 'httparty'

response = HTTParty.get("https://api.unsplash.com/photos/random?query=foods&client_id=#{ENV["UNSPLASH_FOODS_ACCESS_KEY"]}&count=20")
pictures_urls = []
response.each do |response|
    pictures_urls.push(response["urls"]["small"])
end 

# Return alcoholic drinks from cocktaildb api
# Non personal api key "1" provided
alcohols = HTTParty.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
alcohols_array = alcohols["drinks"] 

# Create drink object 
20.times do |n|
    name = alcohols_array[n]["strDrink"] 
    info = Faker::Lorem.sentence(word_count: 15) 
    image = alcohols_array[n]["strDrinkThumb"] 
    price = alcohols_array[n]["idDrink"] 
    n += 1
    Drink.create(
        name:name,
        info:info, 
        image:image, 
        price:price
    )
end


# Generate food data 
20.times do |n|
    name = Faker::Food.dish 
    info = Faker::Lorem.sentence(word_count:13)
    image = pictures_urls[n]
    category = Faker::Food.ethnic_category
    n += 1
    Food.create(
        name: name,
        info: info,
        image:image, 
        category: category
    )
end