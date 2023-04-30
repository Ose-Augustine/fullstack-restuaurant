require 'faker' 

# Generate food data 

2.times do 
    name = Faker::Food.dish 
    info = Faker::Lorem.sentence(word_count:13)
    image = Faker::Avatar.image(size: "50x50", format:"jpg")
    category = Faker::Food.ethnic_category
    Food.create(
        name: name,
        about: info,
        image:image, 
        category: category
    )
end