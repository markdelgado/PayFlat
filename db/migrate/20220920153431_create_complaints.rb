class CreateComplaints < ActiveRecord::Migration[7.0]
  def change
    create_table :complaints do |t|
      t.integer :tenant_id
      t.integer :landlord_id
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
