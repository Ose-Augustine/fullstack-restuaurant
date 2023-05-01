require 'faker' 
require 'httparty'

response = HTTParty.get("https://api.unsplash.com/photos/random?query=foods&client_id=#{ENV["UNSPLASH_FOODS_ACCESS_KEY"]}&count=20")
pictures_urls = []
response.each do |response|
    pictures_urls.push(response["urls"]["small"])
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
        about: info,
        image:image, 
        category: category
    )
end