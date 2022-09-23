class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :address
      t.integer :landlord_id
      t.integer :unit_count
      t.integer :units

      t.timestamps
    end
  end
end
