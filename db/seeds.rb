# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "📃 Seeding data..."
user1 = User.create!(first_name: "mark", last_name: "delgado", email: "mark@gmail.com", password_digest: "password")
user2 = User.create!(first_name: "mic", last_name: "l", email: "micl@gmail.com", password_digest: "password")
user3 = User.create!(first_name: "user", last_name: "user", email: "user@gmail.com", password_digest: "password")




l1=Landlord.create!(user_id: user1.id)

t1 = Tenant.create!(user_id: user2.id)

p1 = Property.create!(name: "sapphire building", address:"12 Main st Brewster, NY 10509",  landlord_id: l1.id )

unit1 = Unit.create!(property_id: p1.id, tenant_id:t1.id, price: "2000", sqft: "975", bed:2, bath:"1", vacant:false)

puts "✅ Done seeding"