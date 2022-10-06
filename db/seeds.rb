# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "📃 Seeding data..."

# landlord user
user1 = User.create!(first_name: "mark", last_name: "delgado", email: "mark@gmail.com", password_digest: BCrypt::Password.create('password'))

#tenant users
user2 = User.create!(first_name: "Mic", last_name: "Law", email: "micl@gmail.com", password_digest: BCrypt::Password.create('password'))
user3 = User.create!(first_name: "Tomer", last_name: "Smith", email: "tomer@gmail.com", password_digest: BCrypt::Password.create('password'))
user4 = User.create!(first_name: "Ant", last_name: "Onio", email: "ant@gmail.com",password_digest: BCrypt::Password.create('password'))
user5 = User.create!(first_name: "Zach", last_name: "Zachy", email: "zach@gmail.com", password_digest: BCrypt::Password.create('password'))




l1=Landlord.create!(user_id: user1.id)

t1 = Tenant.create!(user_id: user2.id)
t2 = Tenant.create!(user_id: user3.id)
t3 = Tenant.create!(user_id: user4.id)
t4 = Tenant.create!(user_id: user5.id)

p1 = Property.create!(name: "sapphire building", address:"12 Main st Brewster, NY 10509",  landlord_id: l1.id, unit_count: 4 )

unit1 = Unit.create!(property_id: p1.id, tenant_id:t1.id, tenant_name: 'Mic Law',price: "2500", sqft: "975", bed:2, bath:"1", apartment_num: '1', tenant_phone: '(917)363-5400', vacant:false)
unit2 = Unit.create!(property_id: p1.id, tenant_id:t2.id, tenant_name: 'Tomer Smith', price: "2500", sqft: "1575", bed:3, bath:"2",apartment_num: '2',tenant_phone: '(917)363-5004', vacant:false)
unit3 = Unit.create!(property_id: p1.id, tenant_id:t3.id, tenant_name: 'Ant Onio',price: "2500", sqft: "1075", bed:2, bath:"1", apartment_num: '3',tenant_phone: '(917)363-0404',vacant:false)
unit4 = Unit.create!(property_id: p1.id, tenant_id:t4.id, tenant_name: 'Zach Zachy', price: "2500", sqft: "1375", bed:2, bath:"1",apartment_num: '4', tenant_phone: '(917)363-5000',vacant:false)

puts "✅ Done seeding"