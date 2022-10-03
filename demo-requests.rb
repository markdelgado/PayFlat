require 'stripe'
Stripe.api_key = 'sk_test_51L9BHpCHv0pdAAKOluLYhWDc4rO2NW4DKV3zjYZTgFTSxc6mli3cDSs7KAAqEN4NeifGNTxK56bOj2PdJxpkK8Xs00eTFTgUjs'

puts "making requests"

#Create A customer with no params
# customer = Stripe::Customer.create
# p customer


#Retrieve customer
# customer = Stripe::Customer.retrieve(
#     "cus_MXxcFFGBZe5jTd"
# )
# p customer

#create customer with scalar params
# customer = Stripe::Customer.create(
#     email: 'jjjj@email.com',
#     name: 'jjjj'
# )
# p customer

# Create customer with enun

# customer = Stripe::Customer.create(
#     tax_exempt: 'exempt'
# )
# p customer


#create customer with nested value

# customer = Stripe::Customer.create(
#     payment_method: 'pm_card_visa',
#     invoice_settings: {
#         default_payment_method: 'pm_card_visa',
#     }

# )
# p customer

#update customer's email address
# customer = Stripe::Customer.update(
#     "cus_MXxygxpLjyX4qe", 
#     email:'update@example.com'
# )
# p customer.id
# p customer.email

# #fetch list of customers
# customers = Stripe::Customer.list
# p customers
# puts customers.data.map(&:id)


#delete a customer 

# customer = Stripe::Customer.delete(
#     "cus_MXxygxpLjyX4qe"
# )
# p customer